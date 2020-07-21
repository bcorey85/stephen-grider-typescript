import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
	todos: Todo[];
	fetchTodos: Function;
	deleteTodo: Function;
}

interface AppState {
	loading: boolean;
}

class _App extends React.Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);

		this.state = { loading: false };
	}

	componentDidUpdate(prevProps: AppProps): void {
		if (!prevProps.todos.length && this.props.todos.length) {
			this.setState({ loading: false });
		}
	}

	onButtonClick = (): void => {
		this.props.fetchTodos();
		this.setState({ loading: true });
	};

	onTodoClick = (id: number): void => {
		this.props.deleteTodo(id);
	};

	renderList(): JSX.Element[] {
		return this.props.todos.map((todo: Todo) => {
			return (
				<div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
					{todo.title}
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<button onClick={this.onButtonClick}>Fetch</button>
				{this.state.loading ? 'LOADING' : null}
				{this.renderList()}
			</div>
		);
	}
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
	return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
