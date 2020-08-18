// called by ParkingForm when radio state is changed
const handleRadio = (checked, event, setEvent) => {
  if (checked.bool) {
    setEvent((prevState) => ({
      ...prevState,
      parkingvenue: event.venue
    }));
    setEvent((prevState) => ({
      ...prevState,
      parkingaddress1: event.address1
    }));
    setEvent((prevState) => ({
      ...prevState,
      parkingaddress2: event.address2
    }));
    setEvent((prevState) => ({
      ...prevState,
      parkingcity: event.city
    }));
    setEvent((prevState) => ({
      ...prevState,
      parkingstate: event.state
    }));
    setEvent((prevState) => ({
      ...prevState,
      parkingzip: event.zip
    }));
  } else {
    setEvent((prevState) => ({
      ...prevState,
      parkingvenue: ''
    }));
    setEvent((prevState) => ({
      ...prevState,
      parkingaddress1: ''
    }));
    setEvent((prevState) => ({
      ...prevState,
      parkingaddress2: ''
    }));
    setEvent((prevState) => ({
      ...prevState,
      parkingcity: ''
    }));
    setEvent((prevState) => ({
      ...prevState,
      parkingstate: ''
    }));
    setEvent((prevState) => ({
      ...prevState,
      parkingzip: ''
    }));
  }
};

export default handleRadio;
