import { Wrapper } from "./style";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import menuLinks from "../../config/menu/links";

const Menu = ({ isOpen, closeDrawer, openDrawer, optionChange }) => {
  return (
    <Wrapper>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={closeDrawer}
        onOpen={openDrawer}
      >
        <div className="options">
          {menuLinks?.map((value, index) => {
            return (
              <span
                className="option-toggle"
                key={index}
                onClick={() => {
                  optionChange(value.value);
                  closeDrawer();
                }}
              >
                {value.label}
              </span>
            );
          })}
        </div>
      </SwipeableDrawer>
    </Wrapper>
  );
};

export default Menu;
