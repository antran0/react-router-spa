import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to=""
              // In the NavLink component, the className prop does not accept
              // a string as usual, but a function that returns a string.
              // An object {isActive, isPending} is automatically passed as
              // an argument and we can use that to conditionally add style.
              // ** The function form also works in the 'style' prop **
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              // Indicates this link should only be considered active if the
              // currently active route ends with the path in the 'to' prop.
              // Can take the value true or false or no value for true.
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
