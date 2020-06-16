// componentShouldUpdate
// It is used in class components for telling the react that it should render or not based on comparing the current and older value
// It returns a boolean value. If it is 'true' then the component rerenders. If it returns false, then the component never rerenders

componentShouldUpdate(nextProps, nextState){
    if(this.props.personName == nextProps.personName){
        return false;
    }
    else{
        return true;
    }
}

class Persons extends pureComponent {   // If we extend our react class with pureComponent, it takes care of componentShouldUpdate where it automatically adds all the conditions with the props passed to it.
    render(){
        return{};
    }
}