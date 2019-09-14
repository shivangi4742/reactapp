import ReactHighCharts from 'react-highcharts';
import DS from './utils/design-system';

const ReactHighchartsConfig = () => {
    ReactHighCharts.Highcharts.setOptions({
        colors: DS.HIGHCHARTS.colors(),
        chart: {
            backgroundColor: DS.HIGHCHARTS.background()
        }
    });
}
export default ReactHighchartsConfig;