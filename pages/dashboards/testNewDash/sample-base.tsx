import * as React from 'react';
    import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

class SampleBaseDash extends React.PureComponent {
        rendereComplete() {
            /**custom render complete function */
        }
        componentDidMount() {
            setTimeout(() => {
                this.rendereComplete();
            });
        }
    }
    export function updateSampleSection(){}
    
export default SampleBaseDash;