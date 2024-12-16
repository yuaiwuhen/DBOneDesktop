export default {
  about: '关于',
  file: '文件',
  edit: '编辑',
  view: '查看',
  collection: '收藏夹',
  tool: '工具',
  message: {
    newConnection: '新建连接',
    refreshConnection: '刷新',
    editConnection: '编辑连接',
    duplicateConnection: '复制连接',
    delConnection: '删除连接',
    closeConnection: '关闭连接',
    addNewLine: '添加新行',
    dumpToClipboard: '复制为命令',
    redisVersion: 'Redis版本',
    processId: '进程ID',
    usedMemory: '已用内存',
    usedMemoryPeak: '内存占用峰值',
    usedMemoryLua: 'Lua占用内存',
    connectedClients: '客户端连接数',
    totalConnectionsReceived: '历史连接数',
    totalCommandsProcessed: '历史命令数',
    keyStatistics: '键值统计',
    allRedisInfo: 'Redis信息全集',
    server: '服务器',
    memory: '内存',
    stats: '状态',
    settings: '基础设置',
    uiSettings: '外观',
    featureSettings: '功能',
    commonSettings: '通用',
    confirmToDeleteRowData: '确认删除该行数据？',
    deleteSuccess: '删除成功',
    deleteFailed: '删除失败',
    modifySuccess: '修改成功',
    modifyFailed: '修改失败',
    addSuccess: '添加成功',
    addFailed: '添加失败',
    valueExists: '值已存在',
    valueNotExists: '该值不存在',
    refreshSuccess: '刷新成功',
    clickEnterToRename: '点击或者按Enter键来重命名',
    clickEnterToTtl: '点击或者按Enter键来修改过期时间',
    confirmToDeleteKey: '确认删除 {key} ?',
    confirmToRenameKey: '确认重命名 {old} -> {new} ?',
    editLine: '修改行',
    autoRefresh: '自动刷新',
    autoRefreshTip: '自动刷新开关，每{interval}秒刷新一次',
    keyNotExists: '键不存在',
    collapseAll: '全部折叠',
    expandAll: '全部展开',
    jsonFormatFailed: 'Json 格式化失败',
    msgpackFormatFailed: 'Msgpack 格式化失败',
    phpUnserializeFormatFailed: 'PHP Unserialize 格式化失败',
    cleanUp: '清空',
    redisConsole: 'Redis 控制台',
    confirmToDeleteConnection: '确认删除连接？',
    connectionExists: '连接配置已存在',
    closeToEditConnection: '编辑前必须关闭连接，要继续么',
    closeToConnection: '确认关闭连接？',
    ttlDelete: '设置TTL<=0将删除该key，是否确认？',
    maxPageReached: '已到达最大页码',
    addNewKey: '新增Key',
    enterNewKey: '请先输入新的key名称',
    keyType: '类型',
    save: '保存',
    enterToSearch: 'Enter 键进行搜索',
    exportSuccess: '导出成功',
    selectImportFile: '选择配置文件',
    importSuccess: '导入成功',
    putFileHere: '将文件拖到此处，或点击选择',
    configConnections: '连接配置',
    import: '导入',
    export: '导出',
    open: '打开',
    close: '关闭',
    openNewTab: '新窗口打开',
    exactSearch: '精确搜索',
    enterToExec: '输入Redis命令后，按Enter键执行，上下键切换历史',
    preVersion: '当前版本',
    manualUpdate: '手动下载',
    retryTooManyTimes: '尝试重连次数过多，请检查Server状态',
    keyToSearch: '输入关键字搜索',
    beginUpdate: '更新',
    ignoreThisVersion: '忽略该版本',
    checkUpdate: '检查更新',
    updateChecking: '检查更新中, 请稍后...',
    updateAvailable: '发现新版本',
    updateNotAvailable: '当前为最新版本',
    updateError: '更新失败',
    updateDownloading: '下载中...',
    updateDownloadProgress: '下载进度',
    updateDownloaded:
      '更新下载完成，重启客户端生效.\
    [Tips]: 如果您使用的是Windows，关闭软件后，请等待桌面图标刷新到正常状态(约10秒)，然后再重新打开即可',
    macNotSupportAutoUpdate:
      'Mac暂时不支持自动更新，请手动<a href="https://github.com/qishibo/AnotherRedisDesktopManager/releases">下载</a>后重新安装，\
    或者执行<br><code>brew reinstall --cask another-redis-desktop-manager </code>\
    <br><hr><br>❤️如果您觉得好用，可以通过<a href="https://apps.apple.com/app/id1516451072">AppStore</a>赞助，并由AppStore帮您自动更新',
    fontFamily: '字体选择',
    fontFaqTitle: '字体设置说明',
    fontFaq:
      '1. 可以设置多个字体<br>2. 字体选择是有序的，建议首先选择英文字体，然后再选择中文字体<br>\
    3. 某些异常情况无法加载系统字体列表时，可以手动输入已安装字体名称',
    privateKeyFaq:
      '目前支持RSA格式私钥，即以<pre>-----BEGIN RSA PRIVATE KEY-----</pre>开头，\
    以<pre>-----BEGIN OPENSSH PRIVATE KEY-----</pre>开头的，需要执行\
    <pre>ssh-keygen -p -m pem -f ~/.ssh/idRsa</pre>进行格式转换后再使用，该操作不会影响以前的私钥登陆',
    darkMode: '深色模式',
    loadMoreKeys: '加载更多',
    keyName: '键名',
    projectHome: '项目主页',
    clusterFaq: '选择集群中任一节点配置填入即可，会自动识别其它节点',
    redisStatus: 'Redis信息',
    confirmFlushDb: '确认删除db{db}中的所有键值么？',
    flushdb: '删除所有键',
    flushdbPrompt: '请输入 "{txt}"',
    infoDisabled: 'Info命令执行异常（可能已被禁用），无法显示Redis信息',
    pageZoom: '页面缩放',
    scanDisabled: 'Scan命令执行异常（可能已被禁用），无法显示Key列表',
    keyTypeNotSupport: '该类型暂不支持可视化展示，请使用命令行进行操作',
    deleteFolder: '扫描并删除整个文件夹',
    multipleSelect: '多项选择',
    copy: '复制',
    copySuccess: '复制成功',
    keysToBeDeleted: '即将删除的键值',
    deleteAll: '全部删除',
    clearCache: '清除缓存',
    markColor: '标记颜色',
    keyNoPermission: '文件读取权限已过期，请手动重新选择密钥文件',
    toggleCheckAll: '全选 | 取消全选',
    selectLang: '选择语言',
    clearCacheTip: '当客户端出现问题时，该操作会删除所有连接和配置，用于恢复客户端',
    detail: '详情',
    separatorTip: '树状显示的分隔符，设置为空可以禁用树状图，直接以列表展示',
    confirmModifyUnvisibleContent:
      '内容中包含不可见字符，你可以在Hex视图中进行安全编辑。如果继续在Text视图中编辑可能会导致编码错误，确定继续么？',
    keysPerLoading: '加载数量',
    keysPerLoadingTip: '每次加载的key数量, 设置过大可能会影响性能',
    host: '地址',
    port: '端口',
    username: '用户名',
    password: '密码',
    connectionName: '连接名称',
    separator: '分隔符',
    timeout: '超时',
    privateKey: '私钥',
    publicKey: '公钥',
    authority: '授权',
    redisNodePassword: 'Redis节点密码',
    masterGroupName: 'Master组名称',
    commandLog: '日志',
    sentinelFaq:
      '多个哨兵任选其一即可，地址、端口、密码请填写哨兵配置，Redis节点密码为哨兵监听的Master节点密码',
    hotkey: '快捷键',
    persist: '持久化',
    customFormatter: '自定义格式化',
    edit: '编辑',
    new: '新增',
    custom: '自定义',
    hideWindow: '隐藏窗口',
    minimizeWindow: '最小化窗口',
    maximizeWindow: '最大化窗口',
    loadAllKeys: '加载所有',
    showLoadAllKeys: '启用按钮以加载所有键',
    loadAllKeysTip: '一次性加载所有key，当key的数量过多时，有可能会导致客户端卡顿，请酌情使用',
    treeNodeOverflow:
      'key或者文件夹数量过多，仅保留{num}个进行展示。如未找到所需key，建议使用模糊搜索，或者设置分隔符来将key分散到文件夹中',
    connectionReadonly: '只读模式，禁止新增、编辑和删除',
    memoryAnalysis: '内存分析',
    begin: '开始',
    pause: '暂停',
    restart: '重新开始',
    maxDisplay: '最大显示数量: {num}',
    maxScan: '最大扫描数量: {num}',
    closeLeft: '关闭左侧标签',
    closeRight: '关闭右侧标签',
    closeOther: '关闭其他标签',
    slowLog: '慢查询'
  }
}
