import React from "react";
import PropTypes from "prop-types";

export default function PageNation({ currentPage, numberOfPages, onClick }) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link">Previous</a>
        </li>
        {Array(numberOfPages)
          .fill(1)
          .map((value, index) => value + index)
          .map((pageNum) => {
            return (
              <li
                key={pageNum}
                className={`page-item ${
                  currentPage === pageNum ? "active" : ""
                }`}
              >
                <div
                  className="page-link cursor-pointer"
                  onClick={() => {
                    onClick(pageNum);
                  }}
                >
                  {pageNum}
                </div>
              </li>
            );
          })}

        {/* <li className={`page-item ${currentPage === 2 ? "active" : ""}`}>
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className={`page-item ${currentPage === 3 ? "active" : ""}`}>
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li> */}
      </ul>
    </nav>
  );
}

PageNation.propTypes = {
  currentPage: PropTypes.number,
  numberOfPages: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

PageNation.defaultProps = {
  currentPage: 1,
};
