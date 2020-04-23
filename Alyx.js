let Main_img = document.querySelector('.main_img');
let BTN = document.querySelectorAll('.btn');
let images = document.querySelectorAll('.images');

BTN.forEach(btn => {
   btn.addEventListener('click', () => {
      if(btn) {
      	btn.classList.add('ground');
      	Main_img.classList.add('blip');

      	Main_img.src = btn.children[0].src;
      	Main_img.alt = btn.children[0].alt;
         Main_img.dataset.mainCount = btn.children[0].dataset.count;

        setTimeout(() => {
      	   Main_img.classList.remove('blip');
        }, 1100);

      	setTimeout(() => {
           btn.classList.remove('ground');
      	}, 5100);
      }
   });
});

 Main_img.addEventListener('click', () => {
   let win = document.createElement('div');
   let main_win = document.createElement('div');
   let IMG = document.createElement('img');
   let block_for_img = document.createElement('div');
   let copy_img = Main_img.cloneNode(true);
   let copy_count = Main_img.dataset.mainCount;
   let count_block = document.createElement('div');
   let count = document.createElement('span');
   let right_block = document.createElement('button');
   let left_block = document.createElement('button');
   let right = document.createElement('i');
   let left = document.createElement('i');
   let block_text = document.createElement('div');
   let text = document.createElement('span');
   let crst_block = document.createElement('button');
   let crst = document.createElement('i');

   win.className = 'win';
   main_win.className = 'main_win';
   block_for_img.className = 'block_for_img';
   IMG.className = 'IMG';
   count_block.className = 'count_block';
   count.className = 'count';
   right_block.className = 'blocks right_block';
   left_block.className = 'blocks left_block';
   right.className = 'fas fa-chevron-right right';
   left.className = 'fas fa-chevron-left left';
   block_text.className = 'block_text';
   text.className = 'text';
   crst_block.className = 'crst_block';
   crst.className = 'fas fa-times crst';

   document.body.appendChild(win);
   win.appendChild(main_win);
   main_win.appendChild(block_for_img);
   block_for_img.appendChild(IMG);
   block_for_img.appendChild(block_text);
   block_text.appendChild(text);
   IMG.src = copy_img.src;
   win.appendChild(count_block);
   count_block.appendChild(count);
   main_win.appendChild(left_block);
   left_block.appendChild(left);
   main_win.appendChild(right_block);
   right_block.appendChild(right);
   win.appendChild(crst_block);
   crst_block.appendChild(crst);

   text.textContent = copy_img.alt;
   count.textContent = `${copy_count}/10`;

   if(copy_count >= 10) right_block.classList.add('hide_right');

   else if(copy_count == 1) left_block.classList.add('hide_left');

   block_for_img.classList.add('trans_blip');

   setTimeout(() => {
      block_for_img.classList.remove('trans_blip');
   }, 1100);

   right.addEventListener('click', () => {
        IMG.src = images[copy_count].src;

        text.textContent = images[copy_count].alt;

        copy_count++;

        count.textContent = `${copy_count}/10`;

        block_for_img.classList.add('trans_blip');

        setTimeout(() => {
           block_for_img.classList.remove('trans_blip');
        }, 1100);

        if(copy_count >= 10) right_block.classList.add('hide_right');
        
        else {
        	left_block.classList.remove('hide_left'); 
        	right_block.classList.remove('hide_right');
        } 

   }); 

    left.addEventListener('click', () => { /* Почти решил проблему... Оказывается, что при перемотки назад нужно сделать -2 */
      IMG.src = images[copy_count-2].src;

      text.textContent = images[copy_count-2].alt;
      
      copy_count--;

      count.textContent = `${copy_count}/10`;

       block_for_img.classList.add('trans_blip');

       setTimeout(() => {
          block_for_img.classList.remove('trans_blip');
       }, 1100);

       if(copy_count == 1) left_block.classList.add('hide_left');

       else {
       	  right_block.classList.remove('hide_right');
       	  left_block.classList.remove('hide_left');
       } 
   }); 

   crst_block.addEventListener('click', () => {
      win.classList.add('close');

      Main_img.src = IMG.src;
      Main_img.alt = text.textContent;
      Main_img.dataset.mainCount = copy_count; 
   });
});  /* Нашел способ, как сделать нормально модальный слайдер */
