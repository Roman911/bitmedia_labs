import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

export const Graph = ({ options }) => {
  return <HighchartsReact
    highcharts={ Highcharts }
    options={ options }
  />
}