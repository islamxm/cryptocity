import './HomeBalance.scss';
import { Row, Col } from 'antd';
// import { ResponsivePie } from '@nivo/pie';
import ReactApexChart from 'react-apexcharts';
import * as _ from 'lodash';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';



// const chartMock = [
//     {
//       id: "elixir",
//       label: "elixir",
//       value: 351,
//       color: "hsl(341, 70%, 50%)"
//     },
//     {
//       id: "sass",
//       label: "sass",
//       value: 267,
//       color: "hsl(275, 70%, 50%)"
//     },
//     {
//       id: "make",
//       label: "make",
//       value: 444,
//       color: "hsl(283, 70%, 50%)"
//     },
//     {
//       id: "lisp",
//       label: "lisp",
//       value: 26,
//       color: "hsl(40, 70%, 50%)"
//     },
//     {
//       id: "erlang",
//       label: "erlang",
//       value: 249,
//       color: "hsl(1, 70%, 50%)"
//     }
//   ]

const labels = ['MPI локи','MPI депозит','MPI на балансе'];
// const colors = ['#FF6A6A', '#57B256', '#6AB6FC', '#615BA5', '#5E595F'];


const HomeBalance = () => {
    const {userInfo} = useSelector(state => state)
    const [dgData, setDgData] = useState([])
    const [mpiLocks, setMpiLocks] = useState(0)
    const [mpiDeposit, setMpiDeposit] = useState(0)
    const [mpiBalance, setMpiBalance] = useState(0)
    const [mpiOutput, setMpiOutput] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if(userInfo) {
            const total = Number(userInfo?.MPILocks) + Number(userInfo?.MPIDeposit) + Number(userInfo?.MPIBalance) + Number(userInfo?.MPIforOutput);
            setTotal(total);
            setMpiLocks(Math.round(Number(userInfo?.MPILocks) / total * 100))
            setMpiDeposit(Math.round(Number(userInfo?.MPIDeposit) / total * 100))
            setMpiBalance(Math.round(Number(userInfo?.MPIBalance) / total * 100))
            setMpiOutput(Math.round(Number(userInfo?.MPIforOutput) / total * 100))
        }
    }, [userInfo])


    return (
        <div className="HomeBalance panel">
            <div className="HomeBalance__head panel__head">balance</div>
            <Col span={24}>
                <Row gutter={[30,30]}>
                    <Col span={24}>
                        <Row gutter={[30,30]}>
                            <Col 
                                md={12}
                                span={24}
                                >
                                <div className="HomeBalance__dg">
                                    <ReactApexChart
                                        width={140}
                                        height={140}
                                        type={'donut'}
                                        series={[mpiLocks, mpiDeposit, mpiBalance]}
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
                                            colors: ['#36C2F3', '#677AE5', '#F5C105'],
                                            dataLabels: {
                                                enabled: false
                                            },
                                            series: {
                                                data: [mpiLocks, mpiDeposit, mpiBalance]
                                            },
                                            plotOptions: {
                                                pie: {
                                                    expandOnClick: false,
                                                    donut: {
                                                        size: '80%',
                                                        labels: {
                                                            show: true,
                                                            name: {
                                                                formatter: (e, i, c) => {
                                                                    return e;
                                                                },
                                                                offsetY: -2,
                                                                fontSize: 10,
                                                                fontWeight: 500,
                                                                color: 'rgba(255, 255, 255, 1)',
                                                                // show: false  
                                                            },
                                                            value: {
                                                                color: 'rgba(255, 255, 255, 1)',
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
                                                    enabled: false
                                                },
                                            },
                                            
                                        }}
                                        
                                        />
                                </div>
                            </Col>
                            <Col span={24} md={12}>
                                <div className="HomeBalance__val">
                                {total - Number(userInfo?.MPIforOutput)} MPI
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <div className="HomeBalance__list">
                            <div className="HomeBalance__item">
                                <div className="HomeBalance__item_name">MPI локи</div>
                                <div className="HomeBalance__item_value">{userInfo?.MPILocks}</div>
                            </div>
                            <div className="HomeBalance__item">
                                <div className="HomeBalance__item_name">MPI депозит</div>
                                <div className="HomeBalance__item_value">{userInfo?.MPIDeposit}</div>
                            </div>
                            <div className="HomeBalance__item">
                                <div className="HomeBalance__item_name">MPI на балансе</div>
                                <div className="HomeBalance__item_value">{userInfo?.MPIBalance}</div>
                            </div>
                            <div className="HomeBalance__item">
                                <div className="HomeBalance__item_name">MPI на вывод</div>
                                <div className="HomeBalance__item_value">{userInfo?.MPIforOutput}</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}

export default HomeBalance;