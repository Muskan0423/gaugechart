import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import { randomGaugeValue } from '../Redux/GaugeSlice';

const Gaugechart = () => {
    const dispatch = useDispatch();
    const gaugevalue = useSelector((state) => state.gauge.value);

    const data = [
        { name: 'Gauge', value: gaugevalue, fill: 'url(#gaugeGradient)' },
    ];

    const needleRotation = (gaugevalue / 100) * 180 - 90;

    return (
        <div className="flex flex-col items-center bg-gray-900 text-white min-h-screen ">
            <div className="w-full md:w-3/4 lg:w-1/2" style={{ paddingTop: '0px' }}>
                <ResponsiveContainer width="100%" height="80%" aspect={1}>
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
                        
                        <text
                            x="50%"
                            y="70%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="#ffffff"
                            fontSize="clamp(18px, 5vw, 32px)"
                        >
                            {gaugevalue}%
                        </text>

                        <text x="7%" y="50%" textAnchor="middle" fill="#ffffff" fontSize="clamp(10px, 2vw, 14px)">0%</text>
                        <text x="17%" y="21%" textAnchor="middle" fill="#ffffff" fontSize="clamp(10px, 2vw, 14px)">25%</text>
                        <text x="50%" y="8%" textAnchor="middle" fill="#ffffff" fontSize="clamp(10px, 2vw, 14px)">50%</text>
                        <text x="80%" y="20%" textAnchor="middle" fill="#ffffff" fontSize="clamp(10px, 2vw, 14px)">75%</text>
                        <text x="95%" y="50%" textAnchor="middle" fill="#ffffff" fontSize="clamp(10px, 2vw, 14px)">100%</text>
                        
   

                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
            <button
                onClick={() => dispatch(randomGaugeValue())}
                className="px-4 py-2 bg-gray-700 hover:bg-blue-600 text-white rounded-md text-sm md:text-base"
            >
                Randomize Value
            </button>
        </div>
    );
}

export default Gaugechart;