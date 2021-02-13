initSidebarItems({"mod":[["action","Nested message and enum types in `Action`."],["action_ref","Nested message and enum types in `ActionRef`."],["controller_packet_metadata","Nested message and enum types in `ControllerPacketMetadata`."],["counter_spec","Nested message and enum types in `CounterSpec`."],["expression","Nested message and enum types in `Expression`."],["match_field","Nested message and enum types in `MatchField`."],["meter_spec","Nested message and enum types in `MeterSpec`."],["p4_bitstring_like_type_spec","Nested message and enum types in `P4BitstringLikeTypeSpec`."],["p4_data_type_spec","Nested message and enum types in `P4DataTypeSpec`."],["p4_enum_type_spec","Nested message and enum types in `P4EnumTypeSpec`."],["p4_header_type_spec","Nested message and enum types in `P4HeaderTypeSpec`."],["p4_header_union_type_spec","Nested message and enum types in `P4HeaderUnionTypeSpec`."],["p4_ids","Nested message and enum types in `P4Ids`."],["p4_new_type_spec","Nested message and enum types in `P4NewTypeSpec`."],["p4_new_type_translation","Nested message and enum types in `P4NewTypeTranslation`."],["p4_serializable_enum_type_spec","Nested message and enum types in `P4SerializableEnumTypeSpec`."],["p4_struct_type_spec","Nested message and enum types in `P4StructTypeSpec`."],["structured_annotation","Nested message and enum types in `StructuredAnnotation`."],["table","Nested message and enum types in `Table`."]],"struct":[["Action",""],["ActionProfile",""],["ActionRef","used to list all possible actions in a Table"],["ControllerPacketMetadata","Any metadata associated with controller Packet-IO (Packet-In or Packet-Out) is modeled as P4 headers carrying special annotations @controller_header(\"packet_out\") and @controller_header(\"packet_in\") respectively. There can be at most one header each with these annotations. This message captures the info contained within these special headers, and used in p4runtime.proto to supply the metadata."],["Counter",""],["CounterSpec",""],["Digest",""],["DirectCounter",""],["DirectMeter",""],["Documentation",""],["Expression",""],["ExpressionList",""],["Extern","used to group all extern instances of the same type in one message"],["ExternInstance",""],["KeyValuePair",""],["KeyValuePairList",""],["MatchField",""],["Meter",""],["MeterSpec",""],["P4BitTypeSpec",""],["P4BitstringLikeTypeSpec",""],["P4BoolType","Empty message as no type information needed, just used as a placeholder in the oneof to identify boolean types."],["P4DataTypeSpec","Describes a P4_16 type."],["P4EnumTypeSpec","For \"safe\" enums with no underlying representation and no member integer values."],["P4ErrorType",""],["P4ErrorTypeSpec","Similar to an enum, but there is always one and only one instance per P4 program."],["P4HeaderStackTypeSpec",""],["P4HeaderTypeSpec",""],["P4HeaderUnionStackTypeSpec",""],["P4HeaderUnionTypeSpec",""],["P4Ids","wrapping the enum in a message to avoid name collisions in C++, where \"enum values are siblings of their type, not children of it\""],["P4Info",""],["P4IntTypeSpec",""],["P4NamedType",""],["P4NewTypeSpec","New types introduced with the \"type\" keyword"],["P4NewTypeTranslation",""],["P4SerializableEnumTypeSpec","For serializable (or \"unsafe\") enums, which have an underlying type. Note that as per the P4_16 specification, the underlying representation can only be a bit type."],["P4StructTypeSpec",""],["P4TupleTypeSpec","From the P4_16 spec: \"A tuple is similar to a struct, in that it holds multiple values. Unlike a struct type, tuples have no named fields.\""],["P4TypeInfo","These P4 types (struct, header_type, header_union and enum) are guaranteed to have a fully-qualified name (e.g. you cannot use an anonymous struct to declare a variable like in C). Instead of duplicating the type spec for these every time the type is used, we include the type spec once in this P4TypeInfo message and refer to the types by name in the P4DataTypeSpec message. We also support annotations for these type specs which can be useful, e.g. to identify well-known headers (such as ipv4)."],["P4VarbitTypeSpec",""],["PkgInfo","Top-level package documentation describing the forwarding pipeline config Can be used to manage multiple P4 packages."],["Preamble",""],["Register",""],["SourceLocation","Location of code relative to a given source file."],["StructuredAnnotation",""],["Table",""],["ValueSet",""]]});