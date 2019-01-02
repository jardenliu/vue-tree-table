export default {
  name: "tree-table",

  data() {
    return {
      tableData: [],
      columnConfig: []
    };
  },

  props: {
    data: {
      required: true
    },
    level: {
      type: Number,
      default: 0
    }
  },

  watch: {
    data(val) {
      this.initData(val);
    }
  },

  methods: {
    initData(newData) {
      const { data, column } = newData;
      if (!data || !column || !Array.isArray(data) || !Array.isArray(column))
        return;
      this.tableData = data;
      this.columnConfig = column;
    }
  },

  mounted() {
    this.initData(this.data);
  },

  // eslint-disable-next-line
  render(h) {
    const th = this.columnConfig.map(col => {
      return <th key={col.prop}>{col.label}</th>;
    });

    const tr = [];
    this.tableData.map(row => {
      const tds = this.columnConfig.map(col => {
        return <td>{row[col.prop]}</td>;
      });

      tr.push(<tr>{tds}</tr>);
      if (row.hasSubTable) {
        tr.push(<tree-table level={this.level + 1} data={row.data} />);
      }
    });

    const table = (
      <div class="j-tree-table">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>{th}</tr>
          {tr}
        </table>
      </div>
    );

    const subTable = (
      <div class="j-tree-table--subtable">
        <tr>{th}</tr>
        {tr}
      </div>
    );

    return this.level <= 0 ? table : subTable;
  }
};
