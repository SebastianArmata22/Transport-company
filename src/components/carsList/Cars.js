import React from 'react';
import classes from './cars.module.scss';

function cars() {
    return (
        <table className={classes.tableCarList}>
            <tr>
                <th>Pojazd</th>
                <th>Przystanek</th>
                <th>Edytuj</th>
            </tr>
            <tr>
                <td>Mercedes KR1231</td>
                <td>Krakow Dworzec</td>
                <td>
                    <i class="fa fa-trash-o"></i>
                    <i class="fa fa-pencil"></i>
                </td>
            </tr>
            <tr>
                <td>Mercedes KR1231</td>
                <td>Krakow Dworzec</td>
                <td>
                    <i class="fa fa-trash-o"></i>
                    <i class="fa fa-pencil"></i>
                </td>
            </tr>
            <tr>
                <td>Mercedes KR1231</td>
                <td>Krakow Dworzec</td>
                <td>
                    <i class="fa fa-trash-o"></i>
                    <i class="fa fa-pencil"></i>
                </td>
            </tr>
        </table>
    )
}

export default cars
