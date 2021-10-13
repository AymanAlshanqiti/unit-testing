import renderer from 'react-test-renderer';
import Button from '../components/button';
describe('button', () => {
	it('matches snapshot', () => {
		const tree = renderer.create(<Button label="Naif" />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
