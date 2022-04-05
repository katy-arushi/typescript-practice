const someElement = document.querySelector('.foo') as HTMLInputElement;

console.log('someElement', someElement.value);

someElement.addEventListener('blur', event => {
	const target = event.target as HTMLInputElement;
	console.log(target.value);
});

// event is generic superclass

interface UserInterface {
	getFullName(): string;
}

class User implements UserInterface {
	private firstName: string;
	private lastName: string;
	readonly unchangeableName: string;
	static readonly maxAge = 50;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.unchangeableName = firstName;
	}

	// changeUnchangeableName(): void {
	// 	this.unchangeableName = 'foo';
	// }

	getFullName(): string {
		return this.firstName + ' ' + this.lastName;
	}
}

const user = new User('Arushi', 'Katyal');

console.log(user.getFullName);

class Admin extends User {
	private editor: string;

	setEditor(editor: string): void {
		this.editor = editor;
	}

	getEditor(): string {
		return this.editor;
	}
}

const admin = new Admin('Foo', 'Bar');
console.log(admin.getEditor);

const addId = <T>(obj: T) => {
	const id = Math.random().toString(16);
	return {
		...obj,
		id,
	};
};

const myUser = {
	name: 'Arushi',
};

const result = addId(user);


// new comment