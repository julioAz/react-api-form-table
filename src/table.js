import React, {Component} from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <td>Julio</td>
                <td>Teste</td>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return <tbody />
}

class Table extends Component {
    render() {
      return (
        <table>
          <TableHeader />
          <TableBody />
        </table>
      )
    }
  }

export default Table;