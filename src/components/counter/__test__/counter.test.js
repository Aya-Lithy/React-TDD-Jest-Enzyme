import { cleanup } from "@testing-library/react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Counter from "../Counter";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Counter />);
});

afterEach(cleanup);

test("render the title of the counter", () => {
  //console.log(wrapper.debug());
  expect(wrapper.find("h1").text()).toContain("This is counter app");
});

test("render a button with text of increment", () => {
  expect(wrapper.find("#increment-btn").text()).toBe("increment");
});

test("render the initial value of state in a div", () => {
  expect(wrapper.find("#counter-value").text()).toBe("0");
});

test("render the click event of increment btn & increment counter value", () => {
  wrapper.find("#increment-btn").simulate("click");
  expect(wrapper.find("#counter-value").text()).toBe("1");
});

//snapshot testing
it("matches snapshot", () => {
  const tree = renderer.create(<Counter />).toJSON();
  expect(tree).toMatchSnapshot();
});
