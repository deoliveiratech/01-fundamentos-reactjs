import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}) {

     function handleDeleteComment(){
        onDeleteComment(content);
     }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/digoliveiradev.png' />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rodrigo Rodrigues</strong>
                            <time title='26 de Setembro às 20:29' dateTime="2022-09-26 20:29:20">Cerca de 1h atrás.</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}