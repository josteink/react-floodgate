// @flow
// @flow-ignore
import type { FloodgateProps, FloodgateState } from "./types";
import React, { Component } from "react";
// @flow-ignore
import PropTypes from "prop-types";
// @flow-ignore
import { generator } from "functions";

class Floodgate extends Component<FloodgateProps, FloodgateState> {
	// flow types
	data: Array<any>;
	queue: Function;
	loadNext: Function;

	// static props
	static propTypes = {
		data: PropTypes.array.isRequired,
		loadCount: PropTypes.number.isRequired,
		initialLoadCount: PropTypes.number
	};
	static defaultProps = {
		initialLoadCount: undefined
	};

	// methods
	constructor(props: FloodgateProps) {
		super();
		this.queue = generator(props.data, props.loadCount, props.initialLoadCount);
		this.data = props.data;
		this.state = {
			renderedData: [],
			allDataRendered: false
		};
		this.loadNext = this.loadNext.bind(this);
	}
	getNext(): Object {
		return this.queue.next();
	}
	componentDidMount(): void {
		this.loadNext();
	}
	loadNext(): void {
		!this.state.allDataRendered &&
			this.setState(prevState => {
				const { value, done } = this.getNext();
				const valueIsAvailable =
					value !== null && value !== undefined && value.length > 0;
				const newRenderedData = [
					...prevState.renderedData,
					...(valueIsAvailable ? value : [])
				];
				const dataLengthMatches = newRenderedData.length === this.data.length;
				const nextYieldIsPartial = value && value.length < this.props.loadCount;

				return {
					renderedData: newRenderedData,
					allDataRendered:
						!valueIsAvailable ||
						(valueIsAvailable && (nextYieldIsPartial || dataLengthMatches))
							? true
							: false
				};
			});
	}
	render(): Function {
		return this.props.children({
			data: this.state.renderedData,
			loadNext: this.loadNext,
			allLoaded: this.state.allDataRendered
		});
	}
}

export default Floodgate;
