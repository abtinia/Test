class Cell {
    constructor(isHeader, disabled, data, column, row) {
        this.isHeader = isHeader;
        this.disabled = disabled;
        this.data = data;
        this.column = column;
        this.row = row;
    }
}

column = 10;
row = 10;

const spreadsheet = [];

init_spreadSheet();

function init_spreadSheet() {
    for (let i = 0; i < row; i++) {
        let spreadsheet_rows = [];
        for (let j = 0; j < row; j++) {
            if (i === 0) {
                isHeader = true;
                disabled = true;
            }

            if (j === 0) {
                isHeader = true;
                disabled = true;
            }

            const cell = new Cell(isHeader, disabled, i + '-' + j, i, j);
            spreadsheet_rows.push(cell);
        }
        spreadsheet.push(spreadsheet_rows);
    }
    console.log(spreadsheet);
    draw_sheet();
}

function create_cellElement(cell) {
    const cell_element = document.createElement('input');
    cell_element.className = 'cell';
    cell_element.value = '';
    cell_element.isHeader = isHeader;
    cell_element.disabled = disabled;

    return cell_element;
}

function draw_sheet() {
    const spreadsheet_container = document.querySelector('.spreadsheet_container');
    spreadsheet_container.innerHTML = '';
    for (let i = 0; i < row; i++) {
        const row_block = document.createElement('div');
        row_block.className = 'rows';
        for (let j = 0; j < row; j++) {
            const cell = spreadsheet[i][j];

            row_block.append(create_cellElement(cell));
        }
        spreadsheet_container.append(row_block);
    }
}
