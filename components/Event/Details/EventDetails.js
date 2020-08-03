import DetailsModal from './DetailsModal';
import { Label, Grid, Modal, Button } from 'semantic-ui-react';

function EventDetails({ event, roles }) {
  function totalCost(roles) {
    var wages = 0;
    var overtime = 0;
    var tips = 0;
    var talentSum = 0;
    var incidentals = 0;
    var fee = 0;
    var costs = {};
    for (var i in roles) {
      const roleCost = Number(roles[i].hours_int) * roles[i].wage;

      costs = {
        wages: (wages = wages + roleCost),
        overtime: (overtime = overtime + roles[i].overtime),
        tips: (tips = tips + roles[i].tip),
        talentSum: (talentSum = wages + overtime + tips),
        incidentals: (incidentals = talentSum * 0.2),
        fee: (fee = talentSum * 0.25),
        sum: talentSum + incidentals + fee
      };
    }
    return costs;
  }

  function round(int) {
    return Math.round(100 * int) / 100;
  }

  return (
    <Grid>
      <Grid.Column textAlign='right'>
        <Grid.Row>
          <DetailsModal
            event={event}
            roles={roles}
            receipt={totalCost(roles)}
          />
        </Grid.Row>
      </Grid.Column>
    </Grid>
  );
}

export default EventDetails;
