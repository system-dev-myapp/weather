
let a = []

let nhietDo  ='';

[].forEach(i => {
    nhietDo += `   
    <th class="col col-custom-table">
        <p>
           ${i.nhietdo}
        </p>
    </th>`
})

Element.innerHTML = `

<table class="table-layout w-100">
                            <tbody>
                                <tr>
                                    // ${nhietDo}
                                    <div dangerouslySetInnerHTML={{__html: ${nhietDo}}}></div>
                                </tr>

                                <tr>
                                    <td class="col col-custom-table">
                                        <p>Icon</p>
                                    </td>
                                    <td class="col col-custom-table">
                                        <img
                                            src="./assets/img/176.webp"
                                            alt=""
                                        />
                                    </td>
                                    <td class="col col-custom-table">
                                        <img
                                            src="./assets/img/176.webp"
                                            alt=""
                                        />
                                    </td>
                                    <td class="col col-custom-table">
                                        <img
                                            src="./assets/img/176.webp"
                                            alt=""
                                        />
                                    </td>

                                    <td class="col col-custom-table">
                                        <img
                                            src="./assets/img/176.webp"
                                            alt=""
                                        />
                                    </td>
                                    <td class="col col-custom-table">
                                        <img
                                            src="./assets/img/176.webp"
                                            alt=""
                                        />
                                    </td>
                                    <td class="col col-custom-table">
                                        <img
                                            src="./assets/img/176.webp"
                                            alt=""
                                        />
                                    </td>
                                    <td class="col col-custom-table">
                                        <img
                                            src="./assets/img/176.webp"
                                            alt=""
                                        />
                                    </td>
                                    <td class="col col-custom-table">
                                        <img
                                            src="./assets/img/176.webp"
                                            alt=""
                                        />
                                    </td>
                                </tr>

                                <tr class="temp">
                                    <td class="col col-custom-table">
                                        <p>Temp</p>
                                    </td>
                                    <td class="col col-custom-table"></td>
                                    <td class="col col-custom-table"></td>
                                    <td class="col col-custom-table"></td>

                                    <td class="col col-custom-table">
                                        <!-- <p>88P.2 °f</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>75.9 °f</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>80.6 °f</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>88P.2 °f</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>75.9 °f</p> -->
                                    </td>
                                </tr>

                                <tr class="wind">
                                    <td class="col col-custom-table">
                                        <p>Wind</p>
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>6.9 m/s</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>6.9 m/s</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>6.9 m/s</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>6.9 m/s</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>6.9 m/s</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>6.9 m/s</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>6.9 m/s</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>6.9 m/s</p> -->
                                    </td>
                                </tr>

                                <tr class="Precip">
                                    <td class="col col-custom-table">
                                        <p>Precip</p>
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>0.01 in</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>0.01 in</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>0.01 in</p> -->
                                    </td>

                                    <td class="col col-custom-table">
                                        <!-- <p>0.01 in</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>0.01 in</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>0.01 in</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>0.01 in</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>0.01 in</p> -->
                                    </td>
                                </tr>

                                <tr class="Cloud">
                                    <td class="col col-custom-table">
                                        <p>Cloud</p>
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>70%</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>70%</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>70%</p> -->
                                    </td>

                                    <td class="col col-custom-table">
                                        <!-- <p>70%</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>70%</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>70%</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>70%</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>70%</p> -->
                                    </td>
                                </tr>

                                <tr class="Humidity">
                                    <td class="col col-custom-table">
                                        <p>Humidity</p>
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>93%</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>93%</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>93%</p> -->
                                    </td>

                                    <td class="col col-custom-table">
                                        <!-- <p>93%</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>93%</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>93%</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>93%</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>93%</p> -->
                                    </td>
                                </tr>

                                <tr class="Pressure">
                                    <td class="col col-custom-table">
                                        <p>Pressure</p>
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>29.8 in</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>29.8 in</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>29.8 in</p> -->
                                    </td>

                                    <td class="col col-custom-table">
                                        <!-- <p>29.8 in</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>29.8 in</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>29.8 in</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>29.8 in</p> -->
                                    </td>
                                    <td class="col col-custom-table">
                                        <!-- <p>29.8 in</p> -->
                                    </td>
                                </tr>
                            </tbody>
                        </table>


`