import './HomeBalance.scss';
import { Row, Col } from 'antd';
// import { ResponsivePie } from '@nivo/pie';
import ReactApexChart from 'react-apexcharts';
import * as _ from 'lodash';

const chartMock = [
    {
      id: "elixir",
      label: "elixir",
      value: 351,
      color: "hsl(341, 70%, 50%)"
    },
    {
      id: "sass",
      label: "sass",
      value: 267,
      color: "hsl(275, 70%, 50%)"
    },
    {
      id: "make",
      label: "make",
      value: 444,
      color: "hsl(283, 70%, 50%)"
    },
    {
      id: "lisp",
      label: "lisp",
      value: 26,
      color: "hsl(40, 70%, 50%)"
    },
    {
      id: "erlang",
      label: "erlang",
      value: 249,
      color: "hsl(1, 70%, 50%)"
    }
  ]

const labels = ['a','b','c','d','e'];
const series = [10,10,10,10,60];
const colors = ['#FF6A6A', '#57B256', '#6AB6FC', '#615BA5', '#5E595F'];


const HomeBalance = () => {
    return (
        <div className="HomeBalance panel">
            <div className="HomeBalance__head panel__head">balance</div>
            <Col span={24}>
                <Row gutter={[30,30]}>
                    <Col span={24}>
                        <Row gutter={[30,30]}>
                            <Col 
                                //span={24}
                                span={12}
                                >
                                <div className="HomeBalance__dg">
                                    <ReactApexChart
                                        width={140}
                                        height={140}
                                        
                                        type={'donut'}
                                        series={series}
                                        labels={labels}
                                        options={{
                                            labels: labels,
                                            
                                            stroke: {
                                                show: false
                                            },
                                            tooltip: {
                                                enabled: false
                                            },
                                            legend: {
                                                show: false,
                                                position: 'bottom',
                                                horizontalAlign: 'left'
                                            },
                                            colors: colors,
                                            dataLabels: {
                                                enabled: false
                                            },
                                            series: {
                                                data: series
                                            },
                                            plotOptions: {
                                                pie: {
                                                    donut: {
                                                        labels: {
                                                            show: true,
                                                            name: {
                                                                formatter: (e, i, c) => {
                                                                    return e;
                                                                },
                                                                fontSize: 15,
                                                                fontWeight: 500,
                                                                color: 'rgba(255, 255, 255, 0.5)',
                                                                // show: false
                                                                
                                                            },
                                                            value: {
                                                                color: 'rgba(255, 255, 255, 0.5)',
                                                                formatter: (e) => {
                                                                    return `${e}%`;
                                                                },
                                                                fontSize: 12,
                                                                offsetY: -4
                                                            },
                                                            
                                                            
                                                        },
                                                        
                                                    }
                                                }
                                            },
                                            chart: {
                                                selection: {
                                                    enabled: true
                                                },
                                            },
                                            
                                        }}
                                        
                                        />
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="HomeBalance__val">
                                2,411 MPI
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <div className="HomeBalance__list">
                            <div className="HomeBalance__item">
                                <div className="HomeBalance__item_name">MPI локи</div>
                                <div className="HomeBalance__item_value">9</div>
                            </div>
                            <div className="HomeBalance__item">
                                <div className="HomeBalance__item_name">MPI депозит</div>
                                <div className="HomeBalance__item_value">18</div>
                            </div>
                            <div className="HomeBalance__item">
                                <div className="HomeBalance__item_name">MPI на балансе</div>
                                <div className="HomeBalance__item_value">0</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}

export default HomeBalance;