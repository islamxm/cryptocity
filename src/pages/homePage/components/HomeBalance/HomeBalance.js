import './HomeBalance.scss';
import { Row, Col } from 'antd';
// import { ResponsivePie } from '@nivo/pie';
import ReactApexChart from 'react-apexcharts';
import * as _ from 'lodash';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Hint from '../../../../components/Hint/Hint';
import {Popover} from 'antd';


const labels = ['MPI локи','MPI депозит','MPI на балансе'];


const HomeBalance = () => {
    const {userInfo} = useSelector(state => state)
    const [mpiLocks, setMpiLocks] = useState(0)
    const [mpiDeposit, setMpiDeposit] = useState(0)
    const [mpiBalance, setMpiBalance] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if(userInfo) {
            const total = Number(userInfo?.MPILocks) + Number(userInfo?.MPIDeposit) + Number(userInfo?.MPIBalance) + Number(userInfo?.MPIforOutput);
            setTotal(total);
            setMpiLocks(Math.round(Number(userInfo?.MPILocks) / total * 100))
            setMpiDeposit(Math.round(Number(userInfo?.MPIDeposit) / total * 100))
            setMpiBalance(Math.round(Number(userInfo?.MPIBalance) / total * 100))
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
                                {_.round(total - Number(userInfo?.MPIforOutput), 2)} MPI
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <div className="HomeBalance__list">
                            <div className="HomeBalance__item">
                                <div className="HomeBalance__item_name">MPI локи</div>
                                <div className="HomeBalance__item_value">{_.round(userInfo?.MPILocks, 2)}</div>
                            </div>
                            <div className="HomeBalance__item">
                                <div className="HomeBalance__item_name">MPI депозит</div>
                                <div className="HomeBalance__item_value">{_.round(userInfo?.MPIDeposit, 2)}</div>
                            </div>
                            <div className="HomeBalance__item">
                                <div className="HomeBalance__item_name">MPI на балансе</div>
                                <div className="HomeBalance__item_value">{_.round(userInfo?.MPIBalance, 2)}</div>
                            </div>
                            <Popover
                                placement={'bottom'}
                                content={
                                    <Hint>
                                        <Row gutter={[50,50]}>
                                            <Col span={24}>
                                                <Row gutter={[5,5]}>
                                                    <Col span={24}>
                                                        Зарабоитано: <span style={{fontWeight: 700}}>{_.round(userInfo?.MPIforOutput, 2)} MPI</span> 
                                                    </Col>
                                                    <Col span={24}>
                                                        Куплено: <span style={{fontWeight: 700}}>{_.round(userInfo?.MPI_Donat, 2)} MPI</span> 
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col span={24}>
                                                <div style={{height: 1, background: '#fff'}}></div>
                                            </Col>
                                            <Col span={24}>
                                                Вы можете вывести только те MPI, которые заработали в игре, MPI которые были куплены или получены в виде бонусов игры, вывести нельзя.
                                            </Col>
                                        </Row>
                                    </Hint>
                                }
                                >
                                <div className="HomeBalance__item">
                                    <div className="HomeBalance__item_name">MPI на вывод</div>
                                    <div className="HomeBalance__item_value">{_.round(userInfo?.MPIforOutput, 2)}</div>
                                </div>
                            </Popover>
                            
                        </div>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}

export default HomeBalance;