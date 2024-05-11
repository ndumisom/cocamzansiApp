import { createContext, useState } from "react";
import moment from "moment";

export const SearchContext = createContext();

function SearchContextProvider({ children }) {
  const [pickupLocation, setPickupLocation] = useState("London");
  const [dropoffLocation, setDropoffLocation] = useState("Paris");
  
  const [guest, setGuest] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const [dateRange, setDateRange] = useState({
    startDate: moment(),
    endDate: moment(),
    displayedDate: moment()
  });

  const [openDateRangePicker, setOpenDateRangePicker] = useState(false);

  const [pickupDate, setPickupDate] = useState(new Date());
  const [dropoffDate, setDropoffDate] = useState(new Date());

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [flightType, setFlightType] = useState("Economy");

  return (
    <SearchContext.Provider
      value={{
        pickupLocation,
        setPickupLocation,
        dropoffLocation,
        setDropoffLocation,
        guest,
        setGuest,
        openDateRangePicker,
        setOpenDateRangePicker,
        dateRange,
        setDateRange,
        pickupDate,
        setPickupDate,
        dropoffDate,
        setDropoffDate,
        isDatePickerVisible,
        setDatePickerVisibility,
        flightType,
        setFlightType
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;
