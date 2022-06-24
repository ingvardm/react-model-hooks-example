import { Model, createModel } from 'react-better-model'

const exampleModelInitialState = {
	count: 0,
}

type Events = {
	clear: undefined,
}

export class ExampleWidgetModel extends Model<typeof exampleModelInitialState, Events>{
	constructor(initialState?: typeof exampleModelInitialState){
		super(initialState || exampleModelInitialState)
	}

	multiplyCount = (x: number) => {
		const newCount = this.state.count * x

		if(newCount > 50){
			this.dispatch('clear')
		} else {
			this.setValue('count', newCount)
		}
	}
}

export const ExampleModelHooks = createModel(ExampleWidgetModel)
