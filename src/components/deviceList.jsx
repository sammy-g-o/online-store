/* eslint-disable react/prop-types */

function DeviceList({
  categories,
  listOfDevices,
}) {
  return (
    <>
      <div className="categories">
        {categories}
      </div>
      <div className="listOfDevices">
        {listOfDevices}
      </div>
    </>
  );
}

export default DeviceList;
