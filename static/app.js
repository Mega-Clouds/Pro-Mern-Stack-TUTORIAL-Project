var contentNode = document.getElementById('contents');
class IssueFilter extends React.Component {
	// OR I can use React.createClass IssueFilter {}.
	render() {
		return React.createElement(
			'div',
			null,
			'This a place holder for filtering lists.'
		);
	}
}

class IssueTable extends React.Component {
	// OR I can use React.createClass IssueTable {}.
	render() {
		return React.createElement(
			'div',
			null,
			'This a place holder for the list table.'
		);
	}
}

class IssueAdd extends React.Component {
	// OR I can use React.createClass Issueadd {}.
	render() {
		return React.createElement(
			'div',
			null,
			'This a place holder for adding em list up.'
		);
	}
}

class IssueList extends React.Component {
	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'Issue Tracker'
			),
			React.createElement(IssueFilter, null),
			React.createElement('hr', null),
			React.createElement(IssueTable, null),
			React.createElement('hr', null),
			React.createElement(IssueAdd, null)
		);
	}
}
ReactDOM.render(React.createElement(IssueList, null), contentNode); // Render the component inside the content Node. I can call the individual components if i choose.
// Like <IssueTable /> from here to display only the IssueTable component.