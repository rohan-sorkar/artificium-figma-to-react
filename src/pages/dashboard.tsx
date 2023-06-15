import { useState } from 'react';
import Modal from "../components/modal";
import Sidebar from '../components/sidebar';
import Artificium from '../components/artificium';
import Chat from '../components/chat';
import Library from '../components/library';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [filterTerm, setFilterTerm] = useState<string>('artificium');

  const changeFilterTerm = (newTerm: string) => {
    setFilterTerm(newTerm);
  }

  const openModal = () => {
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }

  // decide what to render
  let content;
  if(filterTerm === 'artificium') {
    content = <Artificium changeFilterTerm={changeFilterTerm} filterTerm={filterTerm}/>
  }
  if(filterTerm === 'chat') {
    content = <Chat changeFilterTerm={changeFilterTerm} filterTerm={filterTerm}/>
  }
  if(filterTerm === 'library') {
    content = <Library changeFilterTerm={changeFilterTerm} filterTerm={filterTerm}/>
  }

  return (
    <section className="h-screen w-screen bg-noble-black-700">
      
      <Sidebar openModal={openModal}/>

      {content}

      {
        isModalOpen && <Modal closeModal={closeModal} />
      }
    </section>
  );
};

export default Dashboard;
