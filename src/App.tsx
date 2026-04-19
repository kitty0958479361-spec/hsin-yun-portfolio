/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageCircle } from 'lucide-react';

type Page = 'home' | 'shorts' | 'long' | 'contact';

interface Category {
  id: string;
  title: string;
  type: 'short' | 'video';
  videoIds: string[];
}

const INITIAL_BIO = `過去曾在 「Jella!」、「台北市政府」擔任影音編輯時，我經手過「胃公子」與「Jella! 語言星球」等多樣化的頻道內容。我對影片節奏有很強的直覺，無論是知識型、生活感還是娛樂類型的影片都能輕鬆駕馭。

除了剪輯，我對特效字卡與包裝也很講究，擅長用細緻的視覺效果和調色來提升整體質感。我不只是把素材拼湊起來，更喜歡在製作過程中不斷調整、挑戰新的呈現方式，希望能透過我的後製，把最棒的畫面與正能量帶給觀眾！`;

const INITIAL_CATEGORIES: Category[] = [
  {"id":"cat-shorts","title":"短影音作品集","type":"short","videoIds":["V7HmgAXeBs0","aStxDe9W_j4","5hGlRsg0vxU","NDHpLkCT4xE","ApO-eqrAN2I","U-ER8GKZjpQ","APkj7DXp9zI","XOIyJOkcAy8","1uCN4rSGi1o","DcQd7dmR41U","aYgDzWBVTUA"]},
  {"id":"cat-interview","title":"🎙️ 靜態訪談類型","type":"video","videoIds":["8VAsdo2CKMA","Tv6KZM9-Ip0","NlMPVzH3gfE","v8cOF03iITA","3oun-9Kfj8M","hSLo_ZUvhVw","mbSaPRX2La0","qHJjEU8O_LY","Vd4TKnEbzyE","7KIhneF2qZM","gmfnG1urjiE"]},
  {"id":"cat-vlog","title":"📷 Vlog 類型","type":"video","videoIds":["sdP9_2xy_KY","BGzFlIJQ8kY"]},
  {"id":"cat-unboxing","title":"📦 開箱類型","type":"video","videoIds":["h3wbdIaONMU","ge3LW5rEsfs"]},
  {"id":"cat-outdoor","title":"🎬 外景拍攝類型","type":"video","videoIds":["C5bK_L_d5jc","bDIBC_EFEAc","S7vEATLGENc","pxU8ZtR1-Ek","_A3l-JdOH24"]},
  {"id":"cat-other","title":"✨ 其他","type":"video","videoIds":["aw15nNcqwE0","ELfkEJwitpo","ZUiqj3IPYAY"]}
];

// Final production state
export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const categories = INITIAL_CATEGORIES;
  const bio = INITIAL_BIO;

  const showPage = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Header Title */}
      <header className="py-20 px-5 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-light tracking-[0.25em] text-text-main"
        >
          欣芸的作品集
        </motion.h1>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-bg-light/90 backdrop-blur-md py-4 z-50 border-b border-black/5">
        <div className="max-w-5xl mx-auto px-4">
          {/* Mobile Layout: 4 column grid */}
          <div className="grid grid-cols-4 gap-1 md:hidden">
            {(['home', 'shorts', 'long', 'contact'] as Page[]).map((page) => (
              <button
                key={page}
                onClick={() => showPage(page)}
                className={`py-2 rounded-full text-[13px] transition-all duration-300 text-center ${
                  activePage === page
                    ? 'bg-accent text-white shadow-md'
                    : 'text-text-dim border border-black/5'
                }`}
              >
                {page === 'home' && '首頁'}
                {page === 'shorts' && '短影音'}
                {page === 'long' && '長片'}
                {page === 'contact' && '聯絡我'}
              </button>
            ))}
          </div>

          {/* Desktop Layout: Centered Flex */}
          <div className="hidden md:flex justify-center gap-6">
            {(['home', 'shorts', 'long', 'contact'] as Page[]).map((page) => (
              <button
                key={page}
                onClick={() => showPage(page)}
                className={`px-8 py-2 rounded-full text-base transition-all duration-300 hover:scale-105 ${
                  activePage === page
                    ? 'bg-accent text-white shadow-lg'
                    : 'text-text-dim hover:bg-accent/5 hover:text-text-main'
                }`}
              >
                {page === 'home' && '首頁 HOME'}
                {page === 'shorts' && '短影音作品 SHORTS'}
                {page === 'long' && '長片作品 VIDEOS'}
                {page === 'contact' && '聯絡我 CONTACT'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-5 py-10">
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.section
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* About Section */}
              <div className="bg-card-bg p-8 md:p-12 rounded-lg border border-black/5 flex flex-col md:flex-row items-center gap-12 mb-20">
                <img 
                  src="https://raw.githubusercontent.com/kitty0958479361-spec/kukuku/main/%E6%88%AA%E5%9C%96%202026-01-21%20%E5%87%8C%E6%99%A81.00.54.png" 
                  alt="古欣芸" 
                  className="w-44 h-44 rounded-full object-cover border border-accent shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1">
                  <ul className="space-y-3 mb-8 text-lg tracking-wider">
                    <li><span className="font-medium text-accent">姓名：</span>古欣芸</li>
                    <li><span className="font-medium text-accent">Email：</span>
                      <a href="mailto:kukuku84912@gmail.com" className="hover:underline">kukuku84912@gmail.com</a>
                    </li>
                    <li className="text-text-dim">畢業於 淡江大學資訊傳播學系</li>
                  </ul>
                  <div className="pt-6 border-t border-black/10">
                    <p className="text-sm md:text-base leading-relaxed text-text-main whitespace-pre-wrap">
                      {bio}
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {activePage === 'shorts' && (
            <motion.section
              key="shorts"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <SectionTitle title="短影音作品集" />
              
              <div className="space-y-16">
                {categories.filter(c => c.type === 'short').map((category) => (
                  <div key={category.id} className="space-y-8">
                    <CategoryHeader title={category.title} />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {category.videoIds.map((id) => (
                        <ShortCard key={id} id={id} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {activePage === 'long' && (
            <motion.section
              key="long"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-16"
            >
              <SectionTitle title="長片作品集" />
              
              <div className="space-y-20">
                {categories.filter(c => c.type === 'video').map((category) => (
                  <div key={category.id} className="space-y-8">
                    <CategoryHeader title={category.title} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {category.videoIds.map((id) => (
                        <VideoCard key={id} id={id} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {activePage === 'contact' && (
            <motion.section
              key="contact"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex justify-center items-center py-20"
            >
              <div className="bg-card-bg w-full max-w-xl p-12 rounded-2xl border border-black/5 text-center shadow-sm">
                <SectionTitle title="聯絡我" />
                <div className="space-y-10 mt-10">
                  <div className="group">
                    <div className="flex justify-center mb-2"><Mail className="text-accent" /></div>
                    <p className="text-sm text-text-dim uppercase tracking-widest mb-1">Email</p>
                    <a 
                      href="mailto:kukuku84912@gmail.com" 
                      className="text-xl md:text-2xl font-light hover:text-accent transition-colors border-b border-black/10 pb-1"
                    >
                      kukuku84912@gmail.com
                    </a>
                  </div>
                  <div className="group">
                    <div className="flex justify-center mb-2"><MessageCircle className="text-accent" /></div>
                    <p className="text-sm text-text-dim uppercase tracking-widest mb-1">LINE ID</p>
                    <p className="text-xl md:text-2xl font-light">0937128550</p>
                  </div>
                </div>
                <p className="mt-16 text-text-dim font-light italic">期待與您的合作！</p>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-10 text-center text-text-dim text-xs tracking-widest uppercase">
        © {new Date().getFullYear()} Hsin-Yun Portfolio. All Rights Reserved.
      </footer>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="relative text-center mb-12">
      <h2 className="text-2xl font-light tracking-widest text-text-main inline-block pb-4">
        {title}
      </h2>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-accent"></div>
    </div>
  );
}

function CategoryHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="w-8 md:w-20 h-[1px] bg-black/10"></div>
      <h3 className="text-lg font-normal text-text-main/80 flex items-center gap-2">
        {title}
      </h3>
      <div className="w-8 md:w-20 h-[1px] bg-black/10"></div>
    </div>
  );
}

interface CardProps {
  id: string;
  key?: any;
}

function VideoCard({ id }: CardProps) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-black/5 rounded-lg overflow-hidden shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="video-aspect">
        <iframe 
          src={`https://www.youtube.com/embed/${id}`} 
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  );
}

function ShortCard({ id }: CardProps) {
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-black/5 rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-xl"
    >
      <div className="short-aspect">
        <iframe 
          src={`https://www.youtube.com/embed/${id}`} 
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  );
}
