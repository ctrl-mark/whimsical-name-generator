import { AnimatePresence, motion, stagger } from 'framer-motion';

const NamesTable = ({ namesList, pickName }) => {
  const handlePickName = (name) => {
    pickName(name); 
  };

  const chunkNames = (namesList) => {
    let rows = [];
    for (let i = 0; i < namesList.length; i += 4) {
      rows.push(namesList.slice(i, i + 4));
    }
    return rows;
  };

  return (
    <>
      <table className="gold-table" id="gold-table">
        {/* Table Heading */}
        <tbody>
          <tr>
            <th colSpan={6} className="table-title">
              Alternative Names
            </th>
          </tr>
        </tbody>

        {/* Table Contents */}
        <tbody id="table-contents">
          {namesList.length > 0 ? chunkNames(namesList).map((chunk, index) => (
            <tr key={index}>
              {chunk.map((name, i) => (
                <td onClick={() => handlePickName(name)} key={name}>
                  {/* Animate the name with motion.div */}
                  <AnimatePresence exitBeforeEnter>
                    {name && (
                      <motion.div
                        key={name} 
                        style={{ overflow: "hidden", whiteSpace: "nowrap" }}
                        initial={{ opacity: 0, display: "none" }}
                        animate={{ opacity: 1, display: "block", delay: stagger(0.4)}}
                        transition={{ duration: 2, ease: "easeIn" }}
                        exit={{ opacity: 0, display: "none", transition: { duration: 0.2, ease: "easeOut" } }}
                      >
                        <span>{name}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </td>
              ))}
            </tr>
          )) : (
            <tr><td colSpan={4}>Error Fetching Data</td></tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default NamesTable;
