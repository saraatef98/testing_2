// ClubComponent.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ClubComponent from './ClubComponent';

describe('ClubComponent', () => {
  it('renders default message for Real Madrid', () => {
    render(<ClubComponent />);
    expect(screen.getByText('Hala Madrid!')).toBeInTheDocument();
  });

  it('renders correct message for Ahly when selecting from dropdown', () => {
    render(<ClubComponent />);
    
    const selectElement = screen.getByLabelText('Select Best Club:');
    fireEvent.change(selectElement, { target: { value: 'Ahly' } });

    expect(screen.getByText('King of Africa')).toBeInTheDocument();
  });

  it('renders correct message for Zamelk when selecting from dropdown', () => {
    render(<ClubComponent />);
    
    const selectElement = screen.getByLabelText('Select Best Club:');
    fireEvent.change(selectElement, { target: { value: 'Zamelk' } });

    expect(screen.getByText('I support Zamelk')).toBeInTheDocument();
  });

  it('renders correct message for Barcelona when selecting from dropdown', () => {
    render(<ClubComponent />);
    
    const selectElement = screen.getByLabelText('Select Best Club:');
    fireEvent.change(selectElement, { target: { value: 'Barcelona' } });

    expect(screen.getByText('Visca el Barça!')).toBeInTheDocument();
  });

  it('renders correct message for Other Club when selecting from dropdown', () => {
    render(<ClubComponent />);
    
    const selectElement = screen.getByLabelText('Select Best Club:');
    fireEvent.change(selectElement, { target: { value: 'Other' } });

    expect(screen.getByText('Other Club')).toBeInTheDocument();
  });
});
