# JavaScript and classes

#### Object-oriented programming is about modeling a system as a collection of objects, where each object represents some particular aspect of the system. Objects contain both functions (or methods) and data. An object provides a public interface to other code that wants to use it but maintains its own private, internal state; other parts of the system don't have to care about what is going on inside the object.

### OOPs Concept in JavaScript

Encapsulation | Abstraction | Inheritance | Polymorphism

### JavaScript does have classes. Class syntax was introduced in ECMAScript 2015 (ES6) as a way to create blueprints for objects, making it easier to define object-oriented programming patterns in JavaScript. Classes provide a more familiar syntax for developers coming from languages like Java or C++, though under the hood, JavaScript's classes are primarily syntactic sugar over its existing prototype-based inheritance model.

## OOP

## object-oriented programming

- collection of properties and methods
- toLowerCase

## why use OOP

## parts of OOP

- Object literal

- Constructor function
- prototype
- Classes
- Instances (new, this)

# 4 pillars

## Abstraction

#### Abstraction in computer programming is a way to reduce complexity and allow efficient design and implementation in complex software systems. It hides the technical complexity of systems behind simpler APIs.

## Encapsulation

#### Encapsulation is the packing of data and functions into one component (for example, a class) and then controlling access to that component to make a "blackbox" out of the object. Because of this, a user of that class only needs to know its interface (that is, the data and functions exposed outside the class), not the hidden implementation.

## Inheritance

#### JavaScript inheritance is the method through which the objects inherit the properties and the methods from the other objects. It enables code reuse and structuring of relationships between objects, creating a hierarchy where a child object can access features of its parent object.

##### JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.

## Polymorphism

#### Polymorphism is one of the core concepts of object-oriented programming languages where poly means many and morphism means transforming one form into another. Polymorphism means the same function with different signatures is called many times. In real life, for example, a boy at the same time may be a student, a class monitor, etc. So a boy can perform different operations at the same time. This is called polymorphism.

---

## 1. Encapsulation:

#### Definition: Encapsulation is the bundling of data (variables) and methods (functions) that operate on the data into a single unit (class in JavaScript).

#### Example in JavaScript: Using classes to encapsulate data and methods ensures that data is accessed and manipulated through defined methods, maintaining control over how data is modified or accessed.

## 2. Abstraction:

#### Definition: Abstraction focuses on hiding the complex implementation details of methods and providing only the essential features to the outside world.

#### Example in JavaScript: Using methods to perform complex operations internally while exposing simpler interfaces to users.

## 3. Inheritance:

#### Definition: Inheritance allows one class (subclass) to inherit properties and methods from another class (superclass), promoting code reuse and creating a hierarchy of classes.

#### Example in JavaScript: Using extends to inherit properties and methods from a parent class.

## 4. Polymorphism:

#### Definition: Polymorphism allows methods to behave differently based on the object that calls them, providing a way to override methods in subclasses to achieve different behaviors.

#### Example in JavaScript: Method overriding in subclasses to customize behavior while maintaining a consistent interface.
