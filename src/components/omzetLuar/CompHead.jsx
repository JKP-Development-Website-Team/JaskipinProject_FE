import React from 'react'
import { Line } from 'react-chartjs-2'
import { 
    Chart as ChartJs,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js'
import { Row, Col } from 'react-bootstrap'

ChartJs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

const CompHead = () => {
    const datas = [
    {
        title:"Omzet Real Bulan ini",
        price:"Rp. 100.000.000",
        hutang:"-0 ( Hutang )"
    },
    {
        title:"Omzet Real Bulan ini",
        price:"Rp. 100.000.000",
    },
    {
        title:"Omzet Bulan ini",
        price:"Rp. 100.000.000",
    },
    {
        title:"Omzet Hari ini",
        price:"Rp. 100.000.000",
    },
    {
        title:"Omzet Real Bulan ini",
        price:"Rp. 100.000.000",
        hutang:"-0 ( Hutang )"
    },
    {
        title:"Total Order Hari Ini",
        price:"0",
    },
    {
        title:"Total Order Bulan ini",
        price:"0",
    },
    {
        title:"Total Berat Bulan Ini",
        price:"0.000 Kg",
    },
]

const data = {
    labels:["1", "2", "3", "4", "5"],
    datasets:[
    {
        data:[0.3, 0.1, 0.3, 0.5, 0.6],
        backgroundColor:"transparent",
        borderColor: "#f26c6d",
        pointBorderColor: "red",
        pointBorderWidth:4,
        tension:0.5
    },
    {
        data:[0.1, 0.5, 0.2, 0.6, 1.0],
        backgroundColor:"transparent",
        borderColor: "blue",
        pointBorderColor: "blue",
        pointBorderWidth:4,
        tension:0.5
    },
],
}
const options = {
    plugins: {
        legend: false,
    },
    scale:{
        x:{
            grid:{
                display: true
            }
        },
        y:{
            min:0,
            max:1.0,
            ticks:{
                stepSize:0.1,
                callback:(value) => value + 1
            },
            grid:{
                borderDash:[1]
            }
        }
    }
};




  return (
    <div style={{
        display:"flex",
        flexDirection: "column",
        justifyContent: "center"
        
    }}>
        <div style={{
            display: 'flex',
            justifyContent:'space-between',  
            flexWrap:"wrap",
            // flexDirection:"column"
        }}>
            {/* ===== Head Section */}
            {datas.map((data) => (
                <div style={{
                    display: 'flex',
                    margin:"1rem",
                    width:"234px"
                    
                }}>
                    <div style={{
                        width:"100%"
                    }} className="shadowElementHead">
                    <span style={{
                        fontWeight:"400",
                        fontSize:"14",
                        paddingBottom:"0.3rem"

                    }} key={data.title}>{data.title}</span>
                    <h1 style={{
                        fontWeight:"800",
                        fontSize:"23px",
                        color:"#0843AD"
                    }}>{data.price}</h1>
                    <span style={{
                        fontWeight:"700",
                        fontSize:"14",
                        color:"#F61031"
                    }}>{data.hutang}</span>
                    </div>
                </div>
            ))}
            {/* ===== Head Section */}
        </div>
            {/* ===== Chart Section ==== */}
            <div style={{
                width:"517px",
                height:"317px",
                // display: "flex",
                // justifyContent:"flex-start",
                // flexWrap:"wrap"
            }}>
                <div  style={{
                    width:"100%",
                    height:"100%",
                    display:"flex",
                    // justifyContent:"space-between"
                    alignContent:"center",
                    // justifyContent:"center"
                    // flexWrap:"wrap",
                    // flex:"1"
                }}>
                    <Row className='m-3'>
                        <Col className='mb-3'>
                            <Line  className='chartBg' data={data} options={options} ></Line>
                        </Col>
                        <Col>
                            <Line  className='chartBg' data={data} options={options} ></Line>
                        </Col>
                    </Row>
                    <Row className='m-3'>
                        <Col className='mb-3'>
                            <Line  className='chartBg' data={data} options={options} ></Line>
                        </Col>
                        <Col>
                            <Line  className='chartBg' data={data} options={options} ></Line>
                        </Col>
                    </Row>
                </div>
            </div>
            {/* ===== Chart Section ==== */}
    </div>
  )
}

export default CompHead