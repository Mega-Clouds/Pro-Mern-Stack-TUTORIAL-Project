var contentNode = document.getElementById('contents');
class IssueFilter extends React.Component {							// OR I can use React.createClass IssueFilter {}.
	render() {
		return (
			<div>This a place holder for filtering lists.</div>
		);
	}
}

class IssueTable extends React.Component {							// OR I can use React.createClass IssueTable {}.
	render() {
		return (
			<div>This a place holder for the list table.</div>
		);
	}
}

class IssueAdd extends React.Component {							// OR I can use React.createClass Issueadd {}.
	render() {
		return (
			<div>This a place holder for adding em list up.</div>
		);
	}
}


class IssueList extends React.Component {
	render() {
		return (
			<div>
				<h1>Issue Tracker</h1>
				<IssueFilter />
				<hr />
				<IssueTable />
				<hr />
				<IssueAdd />
			</div>
		);
	}
}
ReactDOM.render(<IssueList />, contentNode);						// Render the component inside the content Node. I can call the individual components if i choose.
																	// Like <IssueTable /> from here to display only the IssueTable component.