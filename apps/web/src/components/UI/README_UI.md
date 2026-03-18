## Як використовувати компонент ModalBottomSheet

У компонента є тип, що потребує наступні параметри

isOpen: boolean;
onClose: () => void;
children: React.ReactNode;
title?: string;
bottomPanel?: React.ReactNode;

function ModalBottomSheet({
isOpen,
onClose,
children,
title,
bottomPanel,
}: ModalBottomSheetProps) ...

## при додаванні модалу на сторінку/компонент (рейди, фільтри, тощо)

1. додаємо стан закриття відкриття модалки на початку функції компоненту
   "
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);
"

2. на кнопку, що відкриває модалку додаємо onClick={openModal}

3. до розмітки батьківського компоненту додаємо після всіх секцій

<ModalBottomSheet
isOpen={isModalOpen} (передаємо стан відкриття)
title={"контент заголовку"} (передаємо заголовок)

в нижню панель рендеримо розмітку того, що там на макеті, наприклад:

bottomPanel={
<>

<div className={PageStyles.bottomPanelCtaWrapper}> 
<Button
type="reset"
className={`${ButtonStyles.button} ${ButtonStyles.reset} ${PageStyles.btnClear}

(якшо треба щось додаткове, не всі стілі, для прикладу тут треба було ось

.btnClear,
.btnRequest {
width: auto;
}

)`} >
Clear selection
</Button>
<Button
type="button"
className={`${ButtonStyles.button} ${ButtonStyles.primary} ${PageStyles.btnRequest}`} >
Request to join
</Button>

</div>

</>
}

передаємо стан закриття, для закриття по X
onClose={closeModal}>
{children} - рендеримо розмітку для контенту модалки, напр. деталі рейду, фільтри, тощо або компонент, якщо контент зібраний окремо
</ModalBottomSheet>
