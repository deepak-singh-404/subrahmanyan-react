REDUX => centralized database(temporary) => once we will
referesh page, data will get deleted


for state management btn component

three pillar/files

1- Reducer => initial state => counter => 0
2- action => where we create action, which help us to change/update value of redux state

3- store  => react-redux setup =>this is almost same for every project 


CRUD

two hooks  'react-redux'
1- useDispatch => CREATE, UPDATE, DELETE => it dispatch an action, which we ha ve defined in action file
2- useSelctor => READ STATE FROM REDUX


OUR CC

1 counter state in reducer file
2-define two ation in action file, one will help us to increment countr, and other will help us dec counter

3- when we want to read counter => useSelector
4- for dispatching increment and dec action => useDispatch
