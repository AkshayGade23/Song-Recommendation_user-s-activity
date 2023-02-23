import React from 'react'

function Tables({ data }) {

    console.log("Table Table Data Data")
    console.log(data);

    return (
        <div>
            {Object.keys(data).map(key => (
                <div key={key} className='flex flex-col justify-center items-center'>
                    <div>

                        <h2 className='text-2xl font-semibold mt-10 mb-2.5 ml-2 block'>{key}</h2>
                    </div>
                    <div className='relative overflow-x-auto shadow-md sm:rounded-lg w-1/2 '>
                        <table className='text-sm text-left text-white dark:text-white w-full'>
                            <thead className='text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'>
                                <tr>
                                    <th scope="col" class="px-6 py-3">#</th>
                                    <th scope="col" class="px-6 py-3">Song Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data[key].map((song, index) => (
                                    <tr key={song} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td class="px-6 py-4">{index + 1}</td>
                                        <td class="px-6 py-4">{song}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Tables