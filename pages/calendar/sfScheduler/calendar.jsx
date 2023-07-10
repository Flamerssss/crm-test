import {
  useState,
  useEffect
} from 'react';
import {
  ScheduleComponent,
  ResourcesDirective,
  ResourceDirective,
  ViewsDirective,
  ViewDirective,
  Inject,
  TimelineViews,
  Resize,
  DragAndDrop,
  TimelineMonth,
  Day,
} from "@syncfusion/ej2-react-schedule";
import {
  Grid,
  Typography,
  Button
} from '@mui/material';
import moment from "moment";
import SampleBase from "./sample-base";
import CreateContractInCalendar from "../dialogs/createContracts_dialog";
import {
  extend,
  registerLicense,
  isNullOrUndefined,
  closest,
  Internationalization,
} from "@syncfusion/ej2-base";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { observer } from "mobx-react-lite";
import companyStore from '../../../src/store/company_store';
import contractsStore from '../../../src/store/contracts_store';
import carStore from '../../../src/store/car_store';

// Registering Syncfusion license key
registerLicense(
  "Mgo+DSMBaFt/QHRqVVhlXVpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jSn5adkdgW35YcnNXRw==;Mgo+DSMBPh8sVXJ0S0J+XE9Bd1RDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdUVqWX1dcnVTRWNbUA==;ORg4AjUWIQA/Gnt2VVhkQlFac15JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkZjUH9cc3ZUQGNZU0U=;MTI4NjA2OEAzMjMwMmUzNDJlMzBmeXdJbzBUYTJKRnNlWlZGcXpDWk5SN2VpZWN1czM3TTRqZ0luSFpDclBNPQ==;MTI4NjA2OUAzMjMwMmUzNDJlMzBKekU3UXh5Uy9BNmFsdWpqY29VQzdocmV3dVlUalRRMHlCdTdZMUlWU3RjPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFpDVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVgWXZecndXR2ZYUkB3;MTI4NjA3MUAzMjMwMmUzNDJlMzBsbjJpWFA1WUczZ1UyQlRSRDFVNjM1bjRhRDRCSzhFcjRNVFc3NCsyZGRRPQ==;MTI4NjA3MkAzMjMwMmUzNDJlMzBaam5FS0hrSUlVYXZFQmpsb3Faa05JcVprZUJwT2kxMWl6Ny9rSUM4UEtBPQ==;Mgo+DSMBMAY9C3t2VVhkQlFac15JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkZjUH9cc3ZUQGVcVEU=;MTI4NjA3NEAzMjMwMmUzNDJlMzBYUEkzeUpBRlQ2dnBKcXRrSVJlZVpRTklVQ2pGeld2VGdrdFRYYjlONHlzPQ==;MTI4NjA3NUAzMjMwMmUzNDJlMzBUS2ZyQzZDZzFOMk1xZ29kOHM5Rk0xM3IxcnpqN0pnalVLOXgzL2JmQ3ZFPQ==;MTI4NjA3NkAzMjMwMmUzNDJlMzBsbjJpWFA1WUczZ1UyQlRSRDFVNjM1bjRhRDRCSzhFcjRNVFc3NCsyZGRRPQ=="
);

/**
 * schedule block events sample
 */
class BlockEvents extends SampleBase {
  intl = new Internationalization();
  openEditService = false;
  selectCalendarData;
  diffDate;

  getEmployeeName(value) {
    return value.resourceData[value.resource.textField];
  }

  getEmployeeImage(value) {
    return value.resourceData.car_image;
  }

  getEmployeeDesignation(value) {
    return value.resourceData.car_license_plate;
  }

  resourceHeaderTemplate(props) {
    return (<div className="template-wrap"><div className="employee-category"><div className="employee-name">
      {this.getEmployeeName(props)}</div><div className="employee-designation">{this.getEmployeeDesignation(props)}</div></div></div>);
  }

  editorTemplate(props) {
    return props !== undefined ? (
      <table
        className="custom-event-editor"
        style={{ width: "100%" }}
        cellPadding={5}
      >
        <tbody>
          <tr>
            <td className="e-textlabel">ФИО:</td>
            <td colSpan={4}>
              <input
                id="Summary"
                className="e-field e-input"
                type="text"
                name="Subject"
                style={{ width: "100%" }}
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Статус:</td>
            <td colSpan={4}>
              <DropDownListComponent
                id="EventType"
                placeholder="Choose status"
                data-name="EventType"
                className="e-field"
                style={{ width: "100%" }}
                dataSource={["New", "Requested", "Confirmed"]}
              ></DropDownListComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Начало аренды:</td>
            <td colSpan={4}>
              <DateTimePickerComponent
                id="StartTime"
                format="dd/MM/yy hh:mm a"
                data-name="StartTime"
                value={new Date(props.startTime || props.StartTime)}
                className="e-field"
              ></DateTimePickerComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Конец аренды:</td>
            <td colSpan={4}>
              <DateTimePickerComponent
                id="EndTime"
                format="dd/MM/yy hh:mm a"
                data-name="EndTime"
                value={new Date(props.endTime || props.EndTime)}
                className="e-field"
              ></DateTimePickerComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Комментарий</td>
            <td colSpan={4}>
              <textarea
                id="Description"
                className="e-field e-input"
                name="Description"
                rows={3}
                cols={50}
                style={{
                  width: "100%",
                  height: "60px !important",
                  resize: "vertical",
                }}
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    ) : (
      <div></div>
    );
  }

  headerTemplate(data) {
    return null
  }
  footerTemplate(data) {
    return null
  }


  contentTemplate(props) {
    return (
      <div className="quick-info-content">
        {props.elementType === "cell" ? (
          <div className="event-content">
            <div className="contentBlocPadding"></div>
            <div className="meeting-type-wrap">
              <label>Выберите больше одного дня, для создания договора!</label>
            </div>
          </div>
        ) : (
          <div className="event-content">
            <div className="contentBlocPadding"></div>
            <div className="meeting-type-wrap">
              <label>Контакт арендатора</label>:<span>{props.contract_client_phone}</span>
            </div>
            <div className="notes-wrap">
              <label>Время сдачи</label>:<span>{Intl.DateTimeFormat('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(props?.EndTime)}</span>
            </div>
            <div className="notes-wrap">
              <label>Пробег</label>:<span>{props.Description}</span>
            </div>
            <div className="notes-wrap">
              <label>Бензин</label>:<span>{props.Description}</span>
            </div>
            <div className="notes-wrap">
              <label>Залог вернули</label>:<span>{props.Description}</span>
            </div>
            <div className="notes-wrap">
              <label>Залог в кассе</label>:<span>{props.Description}</span>
            </div>
          </div>
        )}
      </div>
    )
  }

  onresizeStop(args) {
    console.log('RESIZE', args);
  }



  onSelect(args) {
    const timestampSTART = new Date(args.data?.StartTime).getTime();
    const timestampEND = new Date(args.data?.EndTime).getTime();
    const startDate = moment(timestampSTART);
    const timeEnd = moment(timestampEND);
    const diff = timeEnd.diff(startDate, "days");
    console.log('onSelect', args);
    console.log('diff', diff);
    if (diff >= 2 && args.data?.id == null) {
      this.setState({
        openEditService: true,
        selectCalendarData: args.data,
        diffDate: diff,
      })
    }
    console.log('openEditService', this.openEditService);
  }

  onEventClick(props) {
    return (
      <div className="quick-info-content">
        <div className="event-content">
          <div className="contentBlocPadding"></div>
          <div className="meeting-type-wrap">
            <label>Контакт арендатора</label>:<span>{props.contract_client_phone}</span>
          </div>
          <div className="notes-wrap">
            <label>Время сдачи</label>:<span>{Intl.DateTimeFormat('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(props?.EndTime)}</span>
          </div>
          <div className="notes-wrap">
            <label>Пробег</label>:<span>{props.Description}</span>
          </div>
          <div className="notes-wrap">
            <label>Бензин</label>:<span>{props.Description}</span>
          </div>
          <div className="notes-wrap">
            <label>Залог вернули</label>:<span>{props.Description}</span>
          </div>
          <div className="notes-wrap">
            <label>Залог в кассе</label>:<span>{props.Description}</span>
          </div>
        </div>
      </div>
    )
  }



  template(props) {
    return (<div className="template-wrap">
      <div className="fare-detail">111111111111111112</div>
      <div className="airway-name">32132</div>
    </div>);
  }
  // toolTipTemplate(props) {
  //   return (<div className="event-tooltip">
  //     <div className="airline-header">
  //       {/* <div className={"airline-logo " + getAirwaysImage(props.AirlineId)}></div> */}
  //       <div className="airline-name">13213</div>
  //     </div>
  //     <div className="airline-details text-size">
  //       <div className="airline-title">Fare Details:</div>
  //       <div className="airline-fare"> per person</div>
  //     </div>
  //     <div className="airline-flex-row text-size">
  //       <div className="airline-flex-col airline-title border-right">Arrival</div>
  //       <div className="airline-flex-col airline-title text-right">Depature</div>
  //     </div>
  //     <div className="airline-flex-row text-size">
  //       <div className="airline-flex-col border-right">31231</div>
  //       <div className="airline-flex-col margin-right text-right">312312</div>
  //     </div></div>);rgr
  // }



  render() {
    const preparedContracts = this.props.dataContracts?.map((contract) => {
      const endTime = new Date((companyStore.company_profile['type'] != 'carsharing') ? (contract.contract_end_date) : ((contract.ride_end === 0) ? 0 : (contract.ride_end * 1000)));
      endTime.setHours(endTime.getHours() + (companyStore.company_profile['type'] != 'carsharing' ? 1 : (contract.ride_end === 0 ? 999999 : 1)));

      return {
        ...contract,
        car_id: companyStore.company_profile['type'] != 'carsharing' ? contract.car_id : contract.ride_car_id,
        StartTime: new Date((companyStore.company_profile['type'] != 'carsharing') ? (contract.contract_start_date) : (contract.ride_start * 1000)),
        EndTime: endTime,
        allDay: true,
        Subject: companyStore.company_profile['type'] != 'carsharing' ? contract.contract_client : contract.client_display_name,
      };
    });

    return (
      <div className="schedule-control-section">
        <CreateContractInCalendar
          initialCalendarData={this.state?.selectCalendarData}
          diffDate={this.state?.diffDate}
          open={this.state?.openEditService}
          onClose={() => this.setState({ openEditService: false })}
        />
        <div className="col-lg-12 control-section">
          <div className="control-wrapper drag-sample-wrapper">
            <div className="schedule-container">
              <ScheduleComponent
                cssClass="block-events"
                quickInfoOnSelectionEnd={false}
                showQuickInfo={true}
                // addEvent={
                //   this.getTest.bind(this)
                // }
                // cellClick={false}
                // cellDoubleClick={false}
                // showHeaderBar={false}
                // getSelectedElements={
                //   this.returnSelect.bind(this)
                // }
                select={this.onSelect.bind(this)}
                // cellClick={this.onrcellClick.bind(this)}
                resizeStop={this.onresizeStop.bind(this)}
                width="100%"
                height="650px"
                selectedDate={Date()}
                eventClick={this.onEventClick.bind(this)}
                // locale='ru-Ru'
                enablePersistence={true}
                currentView="TimelineMonth"
                resourceHeaderTemplate={this.resourceHeaderTemplate.bind(this)}
                eventSettings={{
                  // template: this.template.bind(this),
                  // enableTooltip: true,
                  // tooltipTemplate: this.toolTipTemplate.bind(this),
                  dataSource: preparedContracts
                }
                }
                editorTemplate={this.editorTemplate.bind(this)}
                group={{ enableCompactView: false, resources: ["Cars"] }}
                quickInfoTemplates={{
                  // header: this.headerTemplate.bind(this),
                  content: this.contentTemplate.bind(this),
                  footer: this.footerTemplate.bind(this),
                }}
              >
                <ResourcesDirective>
                  <ResourceDirective
                    field="car_id"
                    name="Cars"
                    allowMultiple={true}
                    dataSource={this.props.dataCars}
                    textField="car_model_full"
                    idField="id"
                  ></ResourceDirective>
                </ResourcesDirective>
                <ViewsDirective>
                  <ViewDirective option="Day" />
                  <ViewDirective option="TimelineDay" />
                  <ViewDirective option="TimelineMonth" />
                </ViewsDirective>
                <Inject
                  services={[
                    Day,
                    TimelineViews,
                    TimelineMonth,
                    Resize,
                    DragAndDrop,
                  ]}
                />
              </ScheduleComponent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default observer(BlockEvents);
export default BlockEvents;