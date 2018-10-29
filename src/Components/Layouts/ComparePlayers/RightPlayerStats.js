import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    //marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    width: 200,
  },
});

let id = 0;
function createData(name, calories, fat) {
  id += 1;
  return { id, name, calories, fat };
}

const rows = [
  createData('Elims', 159, 6.0),
  createData('Deaths', 237, 9.0),
  createData('Damage', 262, 16.0),
  createData('Healing', 305, 3.7),
];

function SimpleTable(props) {
  //const { classes } = props;

  return (
    <Paper className={props.root}>
      <Table className={props.table}>
        <TableHead>
          <TableRow>
            <TableCell>10 Minutes</TableCell>
            <TableCell numeric>Total</TableCell>
            <TableCell numeric>sinatraa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell numeric>{row.fat}</TableCell>
                <TableCell numeric>{row.calories}</TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
    props: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);