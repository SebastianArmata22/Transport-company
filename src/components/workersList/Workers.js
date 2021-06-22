import React from 'react';
import classes from './workers.module.scss';

function cars() {
    return (
        <table className={classes.tableWorkersList}>
            <tr>
                <th>Imie i nazwisko</th>
                <th>Stanowisko</th>
                <th>Edytuj</th>
            </tr>
            <tr>
                <td>Sebastian Armata</td>
                <td>Kierowca</td>
                <td>
                    <span className={classes.fa}>
                        <i class="fa fa-trash-o"></i>
                        <i class="fa fa-pencil"></i>
                    </span>
                </td>
            </tr>
            <tr>
                <td>Szymon Bol</td>
                <td>Pracownik sekretariatu</td>
                <td>
                    <span className={classes.fa}>
                        <i class="fa fa-trash-o"></i>
                        <i class="fa fa-pencil"></i>
                    </span>
                </td>
            </tr>
            <tr>
                <td>Bartosz Bednarczyk</td>
                <td>Kierowca</td>
                <td>
                    <span className={classes.fa}>
                        <i class="fa fa-trash-o"></i>
                        <i class="fa fa-pencil"></i>
                    </span>
                </td>
            </tr>
        </table>
    )
}

export default cars
