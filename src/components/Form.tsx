import React, {ChangeEvent} from 'react';
import {Field, ErrorMessage} from 'formik';

export class TextInput extends React.Component<IInputProps, any>
{
	render()
	{
		return <FormInput {...this.props} type="text" />;
	}
}

class FormInput extends React.Component<IFormInputProps, any>
{
	render()
	{
		const inputProps = {...this.props};

		delete inputProps.label;

		if(!inputProps.id)
			inputProps.id = this.getInputId();

		return <div>
			{this.props.label && <label htmlFor={inputProps.id} className="block text-xs">{this.props.label}</label>}
			<Field {...inputProps} className="w-full pl-1 pr-1 border-b-2 border-blue-200 focus:border-blue-300" />
			<ErrorMessage name={inputProps.name} render={msg => <span className="text-xs text-red-500">{msg}</span>} />
		</div>;
	}

	getInputId(): string
	{
		return this.props.id || 'input-'+(new Date().getTime());
	}
}


interface IInputProps
{
	name: string

	label?: string
	id?: string
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

interface IFormInputProps extends IInputProps
{
	type: string
}
