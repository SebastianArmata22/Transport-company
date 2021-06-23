import React from 'react'

const BuyTickets = () => {
    return (
        <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
                Kupione bilety
            </h6>
        </div>
        <div className="card-body">
        <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Przystanek początkowy i czas</th>
                            <th>Przystanek końcowy i czas</th>
                            <th>Cena</th>
                            <th>Pokaż bilet</th>
                        </tr>
                    </thead>
                    <tbody>
                
                    </tbody>
                </table>
            </div>
    </div>
</div>
    )
}

export default BuyTickets
