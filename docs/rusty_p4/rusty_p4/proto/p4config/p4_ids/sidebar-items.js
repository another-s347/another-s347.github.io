initSidebarItems({"enum":[["Prefix","ids are allocated in such a way that it is possible based on an id to deduce the resource type (e.g. table, action, counter, ...). The most-significant byte of the 32-bit id encodes the resource type. The purpose of this enum is to define which value is used as the most-significant byte for each resource type. The P4 compiler must use these values when allocating ids for P4 objects. Other users of P4Info can refer to this enum to identify a resource type based on its id."]]});