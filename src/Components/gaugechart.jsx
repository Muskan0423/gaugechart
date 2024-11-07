import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Legend, PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import { randomGaugeValue } from '../Redux/GaugeSlice';

const Gaugechart = () => {
    const dispatch = useDispatch();
    const gaugevalue = useSelector((state) => state.gauge.value);
    console.log(gaugevalue);

    const data = [
        { name: 'Gauge', value: gaugevalue, fill: 'url(#gaugeGradient)' },
        
    ];

    return (
        <div className="flex flex-col items-center bg-gray-900 text-white h-screen rounded-lg">
        <div className="w-full" style={{ paddingTop: '40px' }}>
                <ResponsiveContainer width="100%" height={600}>
               
                        <RadialBarChart
                            innerRadius="70%"
                            outerRadius="100%"
                            startAngle={180}
                            endAngle={0}
                            data={data}
                        >
                            <defs>
                                <linearGradient id="gaugeGradient" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#6f42c1" />
                                    <stop offset="100%" stopColor="#3b0d91" />
                                </linearGradient>
                            </defs>
                            <PolarAngleAxis
                                type="number"
                                domain={[0, 100]}
                                angleAxisId={0}
                                tick={false}
                            />
                            <RadialBar
                                minAngle={15}
                                background
                                clockWise
                                dataKey="value"
                                cornerRadius={10}
                            />
                            <text x="50%" y="65%" textAnchor="middle" dominantBaseline="middle" fill="#ffffff" fontSize={24}>
                                {gaugevalue}%
                            </text>
                   
                            <text x="20%" y="50%" textAnchor="middle" fill="#ffffff">0%</text>
                            <text x="25%" y="15%" textAnchor="middle" fill="#ffffff">25%</text>
                            <text x="50%" y="2%" textAnchor="middle" fill="#ffffff">50%</text>
                            <text x="75%" y="15%" textAnchor="middle" fill="#ffffff">75%</text>
                            <text x="80%" y="50%" textAnchor="middle" fill="#ffffff">100%</text>
                            <polygon
                                points="0,10 5,-10 -5,-10"
                                fill="#ffffff"
                                transform={`translate(150, 150) rotate(${(gaugevalue / 100) * 180})`}
                            />
                        </RadialBarChart>
                   
                </ResponsiveContainer>
            </div>
            <button
                onClick={() => dispatch(randomGaugeValue())}
                className=" px-4 py-2 bg-gray-700 hover:bg-blue-600 text-white rounded-md"
            >
                Randomize Value
            </button>
        </div>
    )
}

export default Gaugechart;
