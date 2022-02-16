import Button from "./components/Button";
import Title from "./components/Title";

function App() {
  return (
    <div className='mx-auto w-4/5'>
      <h1 className='text-2xl font-bold py-5'>Buttons</h1>
      <div className='flex my-5 pb-10'>
        <div>
          <Title text='<Button />' />
          <Button />
        </div>
      </div>
      <div className='flex my-5 pb-10'>
        <div>
          <Title text='<Button variant=”outline” />' />
          <Button variant='outline' />
        </div>
      </div>
      <div className='flex my-5 pb-10'>
        <div>
          <Title text='<Button variant=”text” />' />
          <Button variant='text' />
        </div>
      </div>
      <div>
        <div>
          <Title text='<Button disableShadow />' />
          <Button disableShadow />
        </div>
      </div>
      <div className='flex my-5 pb-10'>
        <div className='mr-5'>
          <Title text='<Button disabled />' />
          <Button disabled />
        </div>
        <div className='mr-5'>
          <Title text='<Button variant="text" disabled />' />
          <Button variant='text' disabled />
        </div>
      </div>
      <div className='flex my-5 pb-10'>
        <div className='mr-5'>
          <Title text='<Button startIcon="local_grocery_store" />' />
          <Button startIcon='local_grocery_store' />
        </div>
        <div className='mr-5'>
          <Title text='<Button endIcon="local_grocery_store" />' />
          <Button endIcon='local_grocery_store' />
        </div>
      </div>
      <div className='flex my-5 pb-10'>
        <div className='mr-5'>
          <Title text='<Button size="sm" />' />
          <Button size='sm' />
        </div>
        <div className='mr-5'>
          <Title text='<Button size="md" />' />
          <Button size='md' />
        </div>
        <div className='mr-5'>
          <Title text='<Button size="lg" />' />
          <Button size='lg' />
        </div>
      </div>
      <div className='flex my-5 pb-10'>
        <div className='mr-5'>
          <Title text='<Button color="default" />' />
          <Button color='default' />
        </div>
        <div className='mr-5'>
          <Title text='<Button color="primary" />' />
          <Button color='primary' />
        </div>
        <div className='mr-5'>
          <Title text='<Button color="secondary" />' />
          <Button color='secondary' />
        </div>
        <div className='mr-5'>
          <Title text='<Button color="danger" />' />
          <Button color='danger' />
        </div>
      </div>
    </div>
  );
}

export default App;
