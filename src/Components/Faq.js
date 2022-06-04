import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

function Faq() {
  return (
    <Box mt="10vh">
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Как подобрать нужный курс?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Ориентируйтесь на подсказки ваших близких, либо на ваши личные
            запросы, система поиска поможет вам в поиске курса.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Как открыть курс?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Вам нужно зайти на страницу и нажать на кнопку “Вперед к курсам”
            Далее необходимо выбрать интересующий вас курс и нажать на кнопку
            “Записаться”
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default Faq;
