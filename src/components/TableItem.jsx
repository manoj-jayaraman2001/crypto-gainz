import { cloneElement } from "react";
import '../styles/cryptodetails.css'
const TableItem = ({ icon, title, value }) => {
  return (
    <div
      className="table-row"
      style={{
        borderBottom: "2px solid lightgray",
        padding: "0 1em",
        minWidth: '150px',
        maxWidth: '500px',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: 'Karla, sans-serif'
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "8px" }}>
          {cloneElement(icon, { style: { color: "#FF630B", fontSize: '0.9em' } })}
        </div>
        <div>
          <p style={{fontSize: '0.9em'}}>{title}</p>
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <span style={{fontSize: '0.9em'}}>{value}</span>
      </div>
    </div>
  );
};

export default TableItem;
