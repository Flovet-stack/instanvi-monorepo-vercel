import dynamic from "next/dynamic";
import React from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Audience() {
    const data: {
        series: {
            data: number[];
        }[];
        options: {
            chart: {
                type: string;
                height: number;
            };
            colors: string[];
            plotOptions: {
                bar: {
                    borderRadius: number;
                    horizontal: boolean;
                };
            };
            dataLabels: {
                enabled: boolean;
            };
            xaxis: {
                categories: string[];
            };
        };
    } = {
        series: [
            {
                data: [110, 430, 348, 477],
            },
        ],
        options: {
            chart: {
                type: "bar",
                height: 50,
            },
            colors: ["#55C790"],
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                },
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                categories: [
                    "Littoral",
                    "Douala",
                    "Bamenda",
                    "Garoua",
                ],
            },
        },
    };

    const dataLanguage: {
        series: {
            data: number[];
        }[];
        options: {
            chart: {
                type: string;
                height: number;
            };
            colors: string[];
            plotOptions: {
                bar: {
                    borderRadius: number;
                    horizontal: true;
                };
            };
            dataLabels: {
                enabled: boolean;
            };
            xaxis: {
                categories: string[];
            };
        };
    } = {
        series: [
            {
                data: [110, 430],
            },
        ],
        options: {
            chart: {
                type: "bar",
                height: 50,
            },
            colors: ["#55C790"],
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                },
            },
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                categories: [
                    "French",
                    "English",
                ],
            },
        },
    };

    const dataDonut: {
        series: number[];
        options: {
            chart: {
                width: number;
                type: string;
            };
            colors: string[];
            plotOptions: {
                pie: {
                    startAngle: number;
                    endAngle: number;
                };
            };
            dataLabels: {
                enabled: boolean;
            };
            fill: {
                type: string;
            };
            labels: string[];
            responsive: {
                breakpoint: number;
                options: {
                    chart: {
                        width: number;
                    };
                    legend: {
                        position: string;
                    };
                };
            }[];
        };
    } = {
        series: [65.8, 20.5, 35.9],
        options: {
            chart: {
                width: 280,
                type: "donut",
            },
            colors: ["#34CAA5", "#FFE032", "#F5F5F5"],
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 270,
                },
            },
            dataLabels: {
                enabled: true,
            },
            fill: {
                type: "gradient",
            },
            labels: ["Low Income", "Mid Income", "High Income"],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                },
            ],
        },
    };

    return (
        <div>
            <div className="p-2 border rounded">
                <div className="w-full text-center">
                    <h2 className="text-xl ">Geography</h2>
                </div>
                <Chart
                    series={data.series}
                    options={data.options}
                    type="bar"
                    height={250}
                />
            </div>
            <div className="p-2 border rounded my-8">
                <div className="w-full text-center">
                    <h2 className="text-xl ">Language</h2>
                </div>
                <Chart
                    series={dataLanguage.series}
                    options={dataLanguage.options}
                    type="bar"
                    height={150}
                />
            </div>
            <div className="p-2 border rounded my-8 py-8">
                <div className="w-full text-center mb-8">
                    <h2 className="text-xl ">
                        Demographics (Marital Status & Income Levels)
                    </h2>
                </div>
                <div className="flex w-full">
                    <div className="mr-3 w-full flex justify-center">
                        <Chart
                            series={dataDonut.series}
                            options={dataDonut.options}
                            type="donut"
                            height={280}
                        />
                    </div>
                    <div className="ml-3 w-full flex justify-center">
                        <Chart
                            series={dataDonut.series}
                            options={dataDonut.options}
                            type="donut"
                            height={280}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
