import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import App from '../components/App';
import store from '../../redux/configureStore';

describe('it tests the App Component', () => {
  it('renders the App Component', () => {
    render(<Router><Provider store={store}><App /></Provider></Router>);
    const appComponent = screen.getByTestId('app-1');
    expect(appComponent).toBeInTheDocument();
  });

  it('renders the rockets page in the App component when the user clicks the Rockets link', () => {
    render(<Router><Provider store={store}><App /></Provider></Router>);
    const rocketsLink = screen.getByTestId('nav-1');
    fireEvent.click(rocketsLink);
    const rocketsContainer = screen.getByTestId('rockets-a');
    const firstchild = rocketsContainer.childNodes[0];
    expect(firstchild).toHaveClass('rocketss');
  });

  it('renders the missions page in the App component when the user clicks the Missions link', () => {
    render(<Router><Provider store={store}><App /></Provider></Router>);
    const missionsLink = screen.getByTestId('nav-2');
    fireEvent.click(missionsLink);
    const missionsContainer = screen.getByTestId('missions-a');
    const firstchild = missionsContainer.childNodes[0];
    expect(firstchild).toHaveClass('missionHeader');
  });

  it('renders the dragons page in the App component when the user clicks the Dragons link', () => {
    render(<Router><Provider store={store}><App /></Provider></Router>);
    const dragonsLink = screen.getByTestId('nav-3');
    fireEvent.click(dragonsLink);
    const dragonsContainer = screen.getByTestId('dragons-a');
    const firstchild = dragonsContainer.childNodes[0];
    expect(firstchild).toHaveClass('dragonHeader');
  });

  it('renders the myprofiles page in the App component when the user clicks the MyProfiles link', () => {
    render(<Router><Provider store={store}><App /></Provider></Router>);
    const myprofilesLink = screen.getByTestId('nav-4');
    fireEvent.click(myprofilesLink);
    const myprofilesContainer = screen.getByTestId('myprofile-a');
    const firstchild = myprofilesContainer.childNodes[0];
    expect(firstchild).toHaveClass('rocketsprofile');
  });
});
