import * as React from 'react';
import { mount } from 'enzyme';
import mountToJson from "enzyme-to-json";
import TestModule from "../main/testmodule";

describe('Props Test', () => {
    test('<TestModule>', () => {
        const elem = mount(<TestModule content="click" />);
        elem.find('button').simulate('click');
        let currentDom = mountToJson(elem);
        expect(currentDom).toMatchSnapshot();
    
        elem.find('button').simulate('click');
        currentDom = mountToJson(elem);
        expect(currentDom).toMatchSnapshot();
    });
});